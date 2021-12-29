import React from "react";
import styled from "styled-components";
import Me from "../Images/Me.jpeg";
export const Header = () => {
  return (
    <Wrapper>
      <img src={Me} alt="ME" />
      <p>
        Hello! I am Harsh Anand Jha.
        <span>I am a Web Developer based in New Delhi,India.</span>
        <span>Currently pursuing engineering at MAIT.</span>
      </p>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #ededed;
  display: flex;
  height: 90vh;
  p {
    font-size: 3rem;
    color: #444444;
    font-family: "Montserrat", sans-serif;
  }
  align-items: center;
  justify-content: space-around;
  span {
    display: block;
  }
  img {
    margin: 0.5rem;
    width: 20rem;
    height: 20rem;
    border-radius: 10rem;
  }
  @media (max-width: 1200px) {
    p {
      font-size: 2rem;
    }
  }
  @media (max-width: 860px) {
    p {
      font-size: 1.5rem;
    }
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 10rem;
    }
  }
  @media (max-width: 555px) {
    flex-direction: column;
    p {
      font-size: 2rem;
    }
    img {
      width: 15rem;
      height: 15rem;
      border-radius: 8rem;
    }
  }
  @media (max-width: 380px) {
    flex-direction: column;
    p {
      font-size: 1.5rem;
    }
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 8rem;
    }
  }
`;
