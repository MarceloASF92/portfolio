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

export const Container = styled.div`
  background-color: #24263b;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;

  .next-page {
    position: absolute;
    bottom: 0;
    background-color: transparent;
    border: 1px solid transparent;
  }

  .container-Img {
    display: none;
  }

  @media (min-width: 768px) {
    width: 90%;
    margin: 0 auto;
    .container-Img {
      display: flex;
      height: 100%;
      animation: ${scaleAnimation} 5s forwards;
      margin-left: 30px;
      figure {
        width: 180px;
        height: 70%;
      }
    }
  } ;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: aliceblue;
  align-items: flex-start;
  justify-content: left;
  height: 100%;
  max-width: 500px;
  width: 90%;
  padding: 1rem;
  animation: ${scaleAnimation} 5s forwards;

  .profile-details-links {
    width: 150px;
    display: flex;
    justify-content: space-between;
    .btn-icons {
      background-color: transparent;
      color: aliceblue;
      border: 1px solid transparent;
      margin-bottom: 20px;
    }
  }

  .profile-details-name {
    font-size: calc(14px + 1.5vmin);
    .highlighted-text {
      font-weight: bolder;
    }
  }

  .profile-details-role {
    display: flex;
    flex-direction: column;
    margin: 14px 0 24px 0;

    h1 {
      font-size: calc(14px + 1.5vmin);
    }

    .profile-role-tagline {
      font-size: 0.8rem;
      text-align: justify;
      margin-top: 14px;
    }
  }

  .profile-options {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .btn-active {
      border: 1px solid transparent;
      border-radius: 20px;
      padding: 10px 0;
      width: calc(120px + 1.5vmin);
      transition: 0.2s;
      font-size: calc(8px + 1.5vmin);
    }

    .btn-active:first-child {
      background-color: aliceblue;
    }

    .btn-active:last-child {
      background-color: #ff6700;
    }

    .btn-active:active {
      transform: translateY(2px);
    }
  }

  @media (min-width: 768px) {
    margin-right: 30px;
  }
`;
