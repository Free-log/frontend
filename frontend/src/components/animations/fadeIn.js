import { css } from "styled-components";

function fadeIn({ duration, delay }) {
  const animation = css`
    animation-name: fadein;
    animation-duration: ${`${duration}s` || "1s"};
    animation-delay: ${`${delay}s` || ""};
    animation-fill-mode: forwards;
    opacity: 0;

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
  return animation;
}

export default fadeIn;
