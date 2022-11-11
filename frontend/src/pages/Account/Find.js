import { TextField, Typography, Box, CustomForm, Button, StyledLink } from "@components";

function Find(props) {
  const counter = props.counter;
  console.log(counter);
  const fadeIn = counter.current == 1 ? "1s" : "";
  const delay = counter.current == 1 ? "1.5s" : "";
  counter.current++;

  return (
    <Box fadeIn={fadeIn} delay={delay}>
      <Box position>
        <CustomForm margin="30px auto">
          <Typography>ID</Typography>
          <TextField />
          <Button margin="30px auto">FIND ID</Button>
        </CustomForm>

        <CustomForm margin="30px auto">
          <Typography>ID</Typography>
          <TextField />
          <Typography>EMAIL</Typography>
          <TextField />
          <Button margin="30px auto">FIND PASSWORD</Button>
        </CustomForm>
      </Box>
      <Box position direction="row">
        <Button margin="10px">
          <StyledLink to="../signin">SIGN IN</StyledLink>
        </Button>
        <Button margin="10px">
          <StyledLink to="../signup">SIGN UP</StyledLink>
        </Button>
      </Box>
    </Box>
  );
}

export default Find;
