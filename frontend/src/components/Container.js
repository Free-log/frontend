import styled from "styled-components";
import { fadeIn, fadeOut } from "./animations";

const Container = styled.div`
  ${(props) => {
    const animation = props.animation;
    if (animation?.fadeIn) return fadeIn(animation.fadeIn);
    if (animation?.fadeOut) return fadeOut(animation.fadeOut);
  }};

  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  flex-direction: ${(props) => props.direction || "column"};
  position: ${(props) => props.position || "absolute"};
`;

export default Container;
