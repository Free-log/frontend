import styled from "styled-components";
import setFileColor from "./setFileColor";
import Paper from "./Paper";
import Container from "../Container";
import openAnimation from "./openAnimation";

const FileBody = styled.div`
  position: absolute;
  top: 10vh;
  width: 44vw;
  height: 98vh;
`;

const FileBookMark = styled.div`
  border-radius: 0 15px 15px 0;
  position: absolute;
  top: 20vh;
  left: 22vw;
  width: 3vw;
  height: 14vh;
`;

const FileContainer = styled(Container)`
  top: ${({ coordinate }) => coordinate?.Y || 0};
  left: ${({ coordinate }) => coordinate?.X || ""};
  z-index: -8;
  transform: ${(props) => `rotate(${props.deg}deg)`};

  ${(props) => {
    const open = props.open;
    if (open) return openAnimation(open);
  }}

  div {
    ${(props) => setFileColor(props.fileColor)}
  }

  div,
  section {
    box-shadow: 4px 4px 4px 0px rgb(0 0 0 / 0.25);
    z-index: -8;
  }
`;

function File({ fileColor, deg, coordinate, animation, open }) {
  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <FileContainer fileColor={fileColor} deg={deg} coordinate={coordinate} animation={animation} open={open}>
      <FileBody />
      <FileBookMark />
      {pages.map((e) => {
        return <Paper key={e} />;
      })}
      <FileBody />
    </FileContainer>
  );
}

export default File;
