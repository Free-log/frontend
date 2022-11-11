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
      <File open={true} />
    </TestDIV>
  );
}

export default MainPage;
