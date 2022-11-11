import File from "../../components/File";
import styled from "styled-components";

const TestDIV = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function Login() {
  return (
    <TestDIV>
      <File type="1" />
      <File type="2" />
      <File />
    </TestDIV>
  );
}

export default Login;
