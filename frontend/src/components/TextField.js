import styled from "styled-components";

const TextField = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
  type: props.type,
}))`
  background-color: ${(props) => props.color || "#F1F1F1"};
  border: ${(props) => props.border || "0"};
  border-radius: 30px;

  margin: ${(props) => props.margin || "0px auto 6px auto"};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};

  width: ${(props) => props.width || "248px"};
  height: ${(props) => props.height || "18px"};

  font-family: Itim;
  font-size: 16px;
  padding: 10px 16px;
`;

export default TextField;
