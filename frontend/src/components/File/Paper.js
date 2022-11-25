import styled from "styled-components";
import page from "../../assets/images/page.png";

const Paper = styled.section`
  background-image: url(${page});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 10vh;
  width: 40vw;
  height: 98vh;

  &:last-of-type {
    width: 44vw;
  }

  &:nth-of-type(5) {
    width: 44vw;
  }

  &:nth-of-type(1) {
    top: 12vh;
    left: -17.4vw;
    transform: rotate(3deg);
  }

  &:nth-of-type(2) {
    top: 9vh;
    left: -20vw;
    transform: rotate(-3deg);
  }

  &:nth-of-type(3) {
    top: 11vh;
    left: -18vw;
    transform: rotate(2deg);
  }

  &:nth-of-type(4) {
    top: 10vh;
    left: -20vw;
    transform: rotate(5deg);
  }
`;

export default Paper;
