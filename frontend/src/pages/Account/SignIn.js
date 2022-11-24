import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Typography, Container, CustomForm, Button, StyledLink } from "@components";
import { signInValidator, spaceRemover } from "@utils";
import { useSelector, useDispatch } from "react-redux";
import { fileEffectSlice, tokenSlice } from "@stores";
import { useEffect } from "react";
import { useState } from "react";

function SignIn(props) {
  const open = useSelector((state) => state.fileEffect.open);
  const counter = props.counter;
  const [animation, setAnimation] = useState();
  counter.current++;

  useEffect(() => {
    if (open) setAnimation({ fadeOut: { duration: 0.4, delay: 0 } });
    if (counter.current === 2) setAnimation({ fadeIn: { duration: 1, delay: 1.5 } });
  }, [open, counter]);
  // handle animation here

  return (
    <Container animation={animation}>
      <InputBox />
      <NavBox />
    </Container>
  );
}

function NavBox() {
  return (
    <Container position direction="row">
      <Button margin="10px">
        <StyledLink to="../signup">SIGN UP</StyledLink>
      </Button>
      <Button margin="10px">
        <StyledLink to="../find">FIND</StyledLink>
      </Button>
    </Container>
  );
}

function InputBox() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(signInValidator) });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    console.log(data);
    dispatch(fileEffectSlice.actions.open());
    setTimeout(() => {
      dispatch(tokenSlice.actions.accessToken(1234));
    }, 2000);
  };

  const watcher = watch(["id", "password"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];
  const errorMessage = !watcher.includes(undefined) && inputChecker ? "Incorrect username or password. " : null;

  return (
    <Container position>
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
    </Container>
  );
}

export default SignIn;
