import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  padding: 2rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  z-index: 9;
  font-size: calc(14px + 1.5vmin);
  width: 120px;

  button {
    color: aliceblue;
    border: 1px solid transparent;
    background-color: transparent;
    transition: 1s ease;
    margin: 20px 0;
    &:hover {
      border-bottom: 1px solid aliceblue;
    }
  }

  .contact-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      &:hover {
        border-bottom: 1px solid transparent;
      }
    }
  }
`;
