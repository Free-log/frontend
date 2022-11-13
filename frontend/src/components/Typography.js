import styled from "styled-components";

const Typography = styled.p`
  color: ${(props) => props.color || "#000000"};
  font-size: ${(props) => props.size || "16px"};
  font-family: Itim;

  margin: ${(props) => props.margin || "10px auto"};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
`;

export default Typography;
