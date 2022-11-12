import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInValidator, spaceRemover } from "@utils";

function SignInBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(signInValidator) });

  const watcher = watch(["id", "password"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];
  const errorMessage = !watcher.includes(undefined) && inputChecker ? "Incorrect username or password. " : null;

  const onSubmit = async (data) => {
    console.log(data);
    // 여기다가 이제 백에 데이터 보내는거
  };

  return (
    <Box position>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Typography marginBottom="4px">ID</Typography>
        <TextField marginBottom="20px" onChange={spaceRemover} {...register("id")} />
        <Typography marginBottom="4px">PASSWORD</Typography>
        <TextField marginBottom="20px" type="password" onChange={spaceRemover} {...register("password")} />
        <Button marginTop="20px" disabled={inputChecker}>
          SIGN IN
        </Button>
      </CustomForm>
      <Typography color="#DF5659" margin={errorMessage ? "12px auto" : "20px"}>
        {errorMessage}
      </Typography>
    </Box>
  );
}

function SignIn(props) {
  const counter = props.counter;
  const fadeIn = counter.current === 1 ? "1s" : "";
  const delay = counter.current === 1 ? "1.5s" : "";
  counter.current++;

  return (
    <Box fadeIn={fadeIn} delay={delay}>
      <SignInBox />
      <Box position direction="row">
        <Button margin="10px">
          <StyledLink to="../signup">SIGN UP</StyledLink>
        </Button>
        <Button margin="10px">
          <StyledLink to="../find">FIND</StyledLink>
        </Button>
      </Box>
    </Box>
  );
}

export default SignIn;
