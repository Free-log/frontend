import { TextField, Typography, Container, CustomForm, Button, StyledLink } from "@components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { findIdValidator, findPasswordValidator, spaceRemover } from "@utils";

function FindIdContainer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(findIdValidator) });

  const watcher = watch(["email"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];

  const onSubmit = async (data) => {
    console.log(data);
  };

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
        <Button marginTop="20px" marginBottom="40px" disabled={inputChecker}>
          FIND ID
        </Button>
      </CustomForm>
    </Container>
  );
}

function FindPasswordContainer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(findPasswordValidator) });

  const watcher = watch(["id", "email"]);
  const inputChecker = watcher.includes("") || watcher.includes(undefined) || Object.values(errors)[0];

  const onSubmit = async (data) => {
    console.log(data);
    // 여기다가 이제 백에 데이터 보내는거
  };

  return (
    <Container position>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <Typography marginBottom="4px">ID</Typography>
        <TextField marginBottom={errors.id?.message ? "6px" : "20px"} onChange={spaceRemover} {...register("id")} />
        <Typography margin="0px" color="#DF5659" size="14px">
          {errors.id?.message}
        </Typography>
        <Typography marginBottom="4px">EMAIL</Typography>
        <TextField
          marginBottom={errors.email?.message ? "6px" : "20px"}
          onChange={spaceRemover}
          {...register("email")}
        />
        <Typography margin="0px" color="#DF5659" size="14px">
          {errors.email?.message}
        </Typography>
        <Button marginTop="20px" marginBottom="40px" disabled={inputChecker}>
          FIND ID
        </Button>
      </CustomForm>
    </Container>
  );
}

function Find(props) {
  const counter = props.counter;
  const fadeIn = counter.current < 2 ? "1s" : "";
  const delay = counter.current < 2 ? "1.5s" : "";
  counter.current++;

  return (
    <Container fadeIn={fadeIn} delay={delay}>
      <FindIdContainer />
      <FindPasswordContainer />
      <Container position direction="row">
        <Button margin="10px">
          <StyledLink to="../signin">SIGN IN</StyledLink>
        </Button>
        <Button margin="10px">
          <StyledLink to="../signup">SIGN UP</StyledLink>
        </Button>
      </Container>
    </Container>
  );
}

export default Find;
