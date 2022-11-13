import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";
import { signInValidator, spaceRemover } from "@utils";
import { fileEffectSlice, tokenSlice } from "@stores";

function SignIn(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(signInValidator) });

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(fileEffectSlice.actions.open());
    setTimeout(() => {
      dispatch(tokenSlice.actions.accessToken(1234));
    }, 2000);
  };
  const dispatch = useDispatch();
  const open = useSelector((state) => state.fileEffect.open);
  const fadeIn = props.counter.current < 2 ? "1s" : "";
  const delay = props.counter.current < 2 ? "1.5s" : "";
  const watcher = watch(["id", "password"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];
  const errorMessage = !watcher.includes(undefined) && inputChecker ? "Incorrect username or password. " : null;

  props.counter.current++;

  return (
    <Box fadeIn={fadeIn} delay={delay} fadeOut={open}>
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
