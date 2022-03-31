import styled from "styled-components";
import { keyframes } from "styled-components";

export const scaleAnimation = keyframes`
    0%{
        opacity: 0;
        transform: scale(1.1);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

export const Container = styled.section`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.primaryDark};
  color: aliceblue;
  overflow-y: auto;
`;

export const Content = styled.div`
  height: 100%;
  opacity: 0;
  animation: ${scaleAnimation} 2s forwards;
  padding-bottom: 50px;
  overflow-y: auto;

  .title-content {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h2 {
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid aliceblue;
      gap: 10px;
      padding: 0.5rem;
      font-size: 1.2rem;
    }
  }

  ul {
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    overflow-x: auto;
    padding: 1rem;
    margin: 0 auto;

    li {
      width: 300px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;

      figure {
        width: 250px;

        img {
          border-radius: 10px;
          opacity: 2;
          box-shadow: 5px 4px 21px 2px #1e1717;
          cursor: pointer;
        }

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          bottom: 25px;
          left: 5px;
          background-color: #a7aad4;
          border-radius: 10px;
          color: #4a476f;
          width: 70%;
          height: 30px;

          &:hover {
            border: 1px solid #4a476f;
            color: #231b34;
          }

          svg {
            &:hover {
              cursor: pointer;
            }
          }
        }
      }

      margin: 0 10px;
    }

    @media (min-width: 768px) {
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto;
      width: 80%;

      li {
        width: 350px;
        figure {
          width: 800px;
        }
      }
    }
  }
`;
