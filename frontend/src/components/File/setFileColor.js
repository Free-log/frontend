import { css } from "styled-components";

function setFileColor(fileVersion) {
  if (fileVersion === "1")
    return css`
      background-color: #eed86c;
      filter: brightness(0.8) saturate(0.4);
    `;
  if (fileVersion === "2")
    return css`
      background-color: #eed86c;
      filter: brightness(1.5);
    `;
  else
    return css`
      background-color: #eed86c;
    `;
}

export default setFileColor;
