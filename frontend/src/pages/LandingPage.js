import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom"

const fillbutton = keyframes`
    50% {
        background: lightgray;
    }
`;

const First = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  background: #34b4eb;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  font-size: 4rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  h1  {
    font-size: 5rem;
    text-align: center;
    margin-left: 3rem;
    color: white;
    text-shadow: 0.3rem 0.3rem black;
  }

  a {
    border: none;
    border-radius: 2rem;
    padding: 2rem;
    font-size: 2.5rem;
    text-align: center;
    background-color: white;
    text-decoration: none;
    color: black;

    :hover {
        animation: ${fillbutton} 1s linear infinite;
    }
  }
`;

const Second = styled.div`
  background: #f0f0f0;
  height: 100%;
  width: 100%;
  transform: translateY(80vh);
  z-index: 1;
`;

const Rowtitle = styled.h2`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 3.5rem;
  justify-content: center;
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  margin: 3rem;
  text-align: center;

  h3 {
    color: #41c2fa;
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #56637a;
  padding: 5rem;
  text-align: end;

  h2 {
    font-size: 3rem;
    align-self: flex-end;
    color: #ebeff5;
    font-weight: lighter;
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    color: #d5d7db;
  }
`;

const Footer = styled.footer`
  display: flex;
  background-color: turquoise;
  justify-content: center;
  padding: 4rem;

  a {
    font-size: 2.5rem;
    color: white;
  }
`;

const Entrypage = () => {
  return (
    <>
      <First>
        <h1>Oh hi there!<br />Have we met yet?</h1>
        <Link to="/register">GET STARTED</Link>
      </First>
      <Second>
        <Rowtitle>EXCEPTEUR SINT OCCAECAT CUPIDATAT.</Rowtitle>
        <Row>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
        </Row>
        <About>
          <h2>LABORIS NISI UT ALIQUIP.</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
        </About>
        <Row>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
          <Section>
            <h3>Hello this is a section</h3>
            <div>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</div>
          </Section>
        </Row>
        <Footer>
          <a href="github.com">See my github</a>
        </Footer>
      </Second>
    </>
  )
};

export default Entrypage;
