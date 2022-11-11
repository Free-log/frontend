import styled, { css } from "styled-components";
import page from "@assets/images/page.png";

const FileBodyUnder = styled.div`
  background-color: #eed86c;
  position: absolute;
  top: 10vh;
  width: 44vw;
  height: 98vh;

  ${(props) => {
    if (props.type === "1") {
      return css`
        filter: brightness(0.8) saturate(0.4);
      `;
    } else if (props.type === "2") {
      return css`
        filter: brightness(1.5);
      `;
    }
  }}
`;

const FileBookMark = styled.div`
  background-color: #eed86c;
  border-radius: 0 15px 15px 0;
  position: absolute;
  top: 20vh;
  left: 22vw;
  width: 3vw;

  height: 14vh;

  ${(props) => {
    if (props.type === "1") {
      return css`
        filter: brightness(0.8) saturate(0.4);
      `;
    } else if (props.type === "2") {
      return css`
        filter: brightness(1.5);
      `;
    }
  }}
`;

const Paper = styled.div`
  background-image: url(${page});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: absolute;
  top: 10vh;
  width: 40vw;
  height: 98vh;

  &:nth-of-type(5) {
    width: 44vw;
    left: -22vw;
  }
  &:last-of-type {
    left: -22vw;
    width: 44vw;
    z-index: ${(props) => (props.open && !props.type ? 0 : -1)};
  }

  &:nth-of-type(3) {
    ${(props) => {
      if (props.type === "1") {
        return css`
          top: 9vh;
          left: -19vw;
          transform: rotate(0.01turn);
        `;
      } else if (props.type === "2") {
        return css`
          top: 14vh;
          left: -17vw;
          transform: rotate(0.03turn);
        `;
      } else {
        return css`
          top: 9vh;
          left: -19vw;
          transform: rotate(-0.01turn);
        `;
      }
    }}
  }

  &:nth-of-type(4) {
    ${(props) => {
      if (props.type === "1") {
        return css`
          top: 7vh;
          left: -17.5vw;
          transform: rotate(0.02turn);
        `;
      } else if (props.type === "2") {
        return css`
          top: 12vh;
          left: -17vw;
          transform: rotate(0.01turn);
        `;
      } else {
        return css`
          top: 12vh;
          left: -17.5vw;
          transform: rotate(0.005turn);
        `;
      }
    }}
  }
`;

const FileBodyUpper = styled.div`
  background-color: #eed86c;
  position: absolute;
  top: 10vh;
  width: 44vw;
  height: 98vh;
  transition: 1s;
  transform-origin: 0;

  ${(props) => {
    if (props.type === "1") {
      return css`
        filter: brightness(0.8) saturate(0.4);
      `;
    } else if (props.type === "2") {
      return css`
        filter: brightness(1.5);
      `;
    }
  }}
`;

const FileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: absolute;
  transition: 1s;
  opacity: ${(props) => (props.fadeIn ? 0 : 1)};

  ${(props) => {
    if (props.fadeIn) {
      if (props.open === true && props.type) {
        return css`
          animation-name: fadeout;
          animation-duration: 1s;
          animation-fill-mode: forwards;
        `;
      }
      return css`
        animation-name: fadein;
        animation-duration: ${(props) => props.fadeIn};
        animation-delay: ${(props) => props.delay};
        animation-fill-mode: forwards;
      `;
    }
  }}

  ${(props) => {
    if (props.open && !props.type)
      return css`
        & ${FileBodyUpper} {
          transform: perspective(1000px) rotateY(-180deg);
        }
        & ${Paper}:last-child {
          transform: perspective(1000px) rotateY(-180deg);
          transition: 0.9s;
          transition-delay: 0.1s;
          transform-origin: 0;
        }
        & {
          transform: translate(22vw, -8vh);
        }
      `;
  }}

  @keyframes fadein {
    from {
      margin-top: 100px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }

  @keyframes fadeout {
    from {
      opacity: 1;
      margin-top: 0;
    }
    to {
      opacity: 0;
      margin-top: 100px;
    }
  }

  ${(props) => {
    if (props.type === "1") {
      return css`
        top: 30vh;
        left: 34vw;
        transform: rotate(-0.00875turn);
      `;
    } else if (props.type === "2") {
      return css`
        top: 14vh;
        left: 64vw;
        transform: rotate(0.00243turn);
      `;
    } else {
      return css`
        left: 50vw;
      `;
    }
  }}

  & div {
    box-shadow: unset 10px 4px 2px 4px rgb(0 0 0 / 0.5);
  }
`;

function File(props) {
  const open = props.open;
  const type = props.type;
  const fadeIn = props.fadeIn;
  const delay = props.delay;

  return (
    <FileContainer type={type} fadeIn={fadeIn} delay={delay} open={open}>
      <FileBodyUnder />
      <FileBookMark type={type} />
      <Paper type={type} />
      <Paper type={type} />
      <Paper />
      <FileBodyUpper type={type} />
      <Paper open={open} type={type} />
    </FileContainer>
  );
}

export default File;
