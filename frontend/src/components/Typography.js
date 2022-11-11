import styled from "styled-components";

const Typography = styled.p`
  font-size: ${(props) => props.size || "16px"};
  font-family: Itim;
  margin: ${(props) => props.margin || "10px auto"};
  color: ${(props) => props.color || "#000000"};
  margin: ${(props) => props.margin};
`;

export default Typography;
