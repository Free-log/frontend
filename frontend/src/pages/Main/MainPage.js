import { File } from "@components";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const TestDIV = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

function MainPage() {
  const { tempName } = useParams();

  return (
    <TestDIV>
      {tempName}
      <File coordinate={{ X: "50vw", Y: "0" }} open={{ duration: 0.1, delay: 0.1 }} />
    </TestDIV>
  );
}

export default MainPage;
