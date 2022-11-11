import styled, { css } from "styled-components";
import page from "@assets/images/page.png";

const FileBodyUnder = styled.div`
  background-color: #eed86c;
  position: absolute;
  top: 10vh;
  width: 44vw;
  height: 90vh;

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
  filter: brightness(1.3) blur(0.3px);
  position: absolute;
  top: 10vh;
  width: 40vw;
  height: 80vh;

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
  height: 90vh;

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
    box-shadow: 10px 10px 2px 0px rgb(0 0 0 / 0.5);
  }
`;

function File(props) {
  const type = props.type;

  return (
    <FileContainer type={type}>
      <FileBodyUnder />
      <FileBookMark type={type} />
      <Paper type={type} />
      <Paper type={type} />

      <Paper type={type} />
      <Paper type={type} />
      <FileBodyUpper type={type} />
    </FileContainer>
  );
}

export default File;
