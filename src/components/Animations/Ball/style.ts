import styled, { keyframes } from "styled-components";

const ball = keyframes`
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(-10px);
  }
`
export const BallStyle = styled.div`
  animation: ${ball} 1s infinite alternate;
  -webkit-animation: ${ball} 1s infinite alternate;
`
