import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidator, spaceRemover } from "@utils";
import { TextField, Typography, Container, CustomForm, Button, StyledLink } from "@components";

function SignUp(props) {
  const counter = props.counter;
  const animation = counter.current === 1 ? { fadeIn: { duration: 1, delay: 1.5 } } : "";
  counter.current++;
  // handle animation

  return (
    <Container animation={animation}>
      <InputBox />
      <NavBox />
    </Container>
  );
}

function InputBox() {
  const onSubmit = async (data) => {
    alert("회원가입 성공", navigate("../signin"));
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(signUpValidator) });
  const navigate = useNavigate();
  const watcher = watch(["id", "email", "password", "passwordConfirm"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];

  return (
    <Container position>
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
    </Container>
  );
}
function NavBox() {
  return (
    <Container position direction="row">
      <Button margin="10px">
        <StyledLink to="../signin">SIGN IN</StyledLink>
      </Button>
      <Button margin="10px">
        <StyledLink to="../find">FIND</StyledLink>
      </Button>
    </Container>
  );
}

export default SignUp;
