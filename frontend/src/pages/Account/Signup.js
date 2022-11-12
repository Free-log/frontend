import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidator, spaceRemover } from "@utils";
import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";

function SignUp(props) {
  const onSubmit = async (data) => {
    console.log(data);
    // 여기다가 이제 백에 데이터 보내는거
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(signUpValidator) });
  const watcher = watch(["id", "email", "password", "passwordConfirm"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];
  const counter = props.counter;
  const fadeIn = counter.current < 2 ? "1s" : "";
  const delay = counter.current < 2 ? "1.5s" : "";

  counter.current++;

  return (
    <Box fadeIn={fadeIn} delay={delay}>
      <Box position>
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
          <Typography marginBottom="4px">EMAIL</Typography>
          <TextField
            marginBottom={errors.email?.message ? "6px" : "20px"}
            onChange={spaceRemover}
            {...register("email")}
          />
          <Typography margin="0px" color="#DF5659" size="14px">
            {errors.email?.message}
          </Typography>
          <Typography marginBottom="4px">ID</Typography>
          <TextField marginBottom={errors.id?.message ? "6px" : "20px"} onChange={spaceRemover} {...register("id")} />
          <Typography margin="0px" color="#DF5659" size="14px">
            {errors.id?.message}
          </Typography>
          <Typography marginBottom="4px">PASSWORD</Typography>
          <TextField
            type="password"
            marginBottom={errors.password?.message ? "6px" : "20px"}
            onChange={spaceRemover}
            {...register("password")}
          />
          <Typography margin="0px" color="#DF5659" size="14px">
            {errors.password?.message}
          </Typography>
          <Typography marginBottom="4px">PASSWORD CONFIRM</Typography>
          <TextField
            type="password"
            marginBottom={errors.passwordConfirm?.message ? "6px" : "20px"}
            onChange={spaceRemover}
            {...register("passwordConfirm")}
          />
          <Typography margin="0px" color="#DF5659" size="14px">
            {errors.passwordConfirm?.message}
          </Typography>
          <Button marginTop="20px" marginBottom="40px" disabled={inputChecker}>
            SIGN UP
          </Button>
        </CustomForm>
      </Box>
      <Box position direction="row">
        <Button margin="10px">
          <StyledLink to="../signin">SIGN IN</StyledLink>
        </Button>
        <Button margin="10px">
          <StyledLink to="../find">FIND</StyledLink>
        </Button>
      </Box>
    </Box>
  );
}

export default SignUp;
