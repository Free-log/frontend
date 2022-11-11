import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
`;

export default Container;
