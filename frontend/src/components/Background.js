import styled from "styled-components";
import background from "@assets/images/background.png";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -10;
  opacity: 0.7;
  background-image: url(${background});
`;

export default Background;
