import styled from "styled-components";

export const Container = styled.div`
  position: ${({ open }) => (open ? "fixed" : "absolute")};
  top: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  cursor: pointer;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  > div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background-color: aliceblue;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open && 0};
      opacity: ${({ open }) => open && "0"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open && "rotate(-45deg)"};
    }
  }
`;
