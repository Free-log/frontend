import { css } from "styled-components";

function openAnimation({ duration, delay }) {
  const pageDuration = duration - 0.1;
  const pageDelay = delay + 0.1;

  const animation = css`
    opacity: 1;

    & {
      animation-name: move;
      animation-duration: ${duration || "1.2s"};
      animation-delay: ${delay || ""};
      animation-fill-mode: forwards;
    }

    & > div:last-child {
      animation-name: openBody;
      animation-duration: ${duration || "1.2s"};
      animation-delay: ${delay || ""};
      animation-fill-mode: forwards;
    }

    & > section:last-of-type {
      animation-name: openPage;
      animation-duration: ${duration ? pageDuration : "1.1s"};
      animation-delay: ${delay ? pageDelay : "0.1s"};
      animation-fill-mode: forwards;
    }

    @keyframes openPage {
      from {
        transform-origin: 0 0;
      }
      to {
        z-index: -7;
        transform-origin: 0 0;
        transform: perspective(1200px) rotateY(-180deg);
      }
    }

    @keyframes openBody {
      from {
        transform-origin: 0 0;
      }
      to {
        transform-origin: 0 0;
        transform: perspective(1200px) rotateY(-180deg);
      }
    }

    @keyframes move {
      to {
        transform: translate(22vw, -8vh);
      }
    }
  `;
  return animation;
}

export default openAnimation;
