import styled from "styled-components";

const Button = styled.button.attrs((props) => ({ id: props.id }))`
  cursor: ${(props) => props.disabled || "auto"};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
  background-color: ${(props) => props.color || "#F1F1F1"};

  width: ${(props) => props.width || "160px"};
  height: ${(props) => props.height || "30px"};
  margin: ${(props) => props.margin || "0 auto"};
  border: ${(props) => props.border || "0px solid white"};

  border-radius: 30px;
  font-family: Itim;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    opacity: 0.5;
  }
`;

export default Button;
