import styled from "styled-components";

export const CircleView = styled.div`
  overflow: hidden;
`;

export const CircleList = styled.ul`
  list-style: none;

  li {
    position: absolute;
    width: 15%;
    height: 40vw;
    max-height: 50%;
    transform-origin: 0 100%;
  }

  li:nth-child(1) {
    transform: rotate(calc(0deg - 27deg));
  }

  li:nth-child(2) {
    transform: rotate(calc(60deg - 27deg));
  }

  li:nth-child(3) {
    transform: rotate(calc(120deg - 27deg));
  }

  li:nth-child(4) {
    transform: rotate(calc(180deg - 27deg));
  }

  li:nth-child(5) {
    transform: rotate(calc(240deg - 27deg));
  }

  li:nth-child(6) {
    transform: rotate(calc(300deg - 27deg));
  }
`;
