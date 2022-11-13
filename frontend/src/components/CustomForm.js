import styled from "styled-components";

const CustomForm = styled.form`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || "auto"};
`;

export default CustomForm;
