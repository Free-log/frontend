import styled, { css } from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: ${(props) => props.position || "absolute"};
  overflow: hidden;
  opacity: ${(props) => (props.fadeIn ? 0 : 1)};

  ${(props) => {
    if (props.fadeIn) {
      return css`
        animation-name: fadein;
        animation-duration: ${(props) => props.fadeIn};
        animation-delay: ${(props) => props.delay};
        animation-fill-mode: forwards;

        @keyframes fadein {
          from {
            margin-top: 100px;
          }
          to {
            opacity: 1;
            margin-top: 0;
          }
        }
      `;
    }
  }}
`;

export default Box;