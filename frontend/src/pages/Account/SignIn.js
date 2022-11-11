import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";

function SignIn(props) {
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
          <Typography>PASSWORD</Typography>
          <TextField />
          <Button margin="30px auto">SIGN IN</Button>
        </CustomForm>
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