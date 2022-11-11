import File from "../../components/File";
import styled from "styled-components";
import { useState } from "react";

const TestDIV = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function SignIn() {
  const [open, setOpen] = useState(false);
  return (
    <TestDIV>
      <File type="1" fadeIn="1s" open={open} />
      <File type="2" fadeIn="1s" delay="0.5s" open={open} />
      <File fadeIn="1s" delay="1s" open={open} />
    </TestDIV>
  );
}

export default SignIn;
