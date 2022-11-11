import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";

function SignUp(props) {
  const counter = props.counter;
  console.log(counter);
  const fadeIn = counter.current == 1 ? "1s" : "";
  const delay = counter.current == 1 ? "1.5s" : "";
  counter.current++;

  return (
    <Box fadeIn={fadeIn} delay={delay}>
      <Box position>
        <CustomForm>
          <Typography>ID</Typography>
          <TextField />
          <Typography>EMAIL</Typography>
          <TextField />
          <Typography>PASSWORD</Typography>
          <TextField />
          <Typography>CONFIRM PASSWORD</Typography>
          <TextField />
          <Button margin="30px auto">SIGN UP</Button>
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
