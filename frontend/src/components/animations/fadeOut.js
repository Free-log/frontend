import { css } from "styled-components";

function fadeOut({ duration, delay }) {
  const animation = css`
    animation-name: fadeout;
    animation-duration: ${`${duration}s` || "1s"};
    animation-delay: ${`${delay}s` || ""};
    animation-fill-mode: forwards;

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
  `;
  return animation;
}

export default fadeOut;
