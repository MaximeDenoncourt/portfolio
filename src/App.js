import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfileInfo from "./components/Banner/ProfileInfo";

import Aboutme from "./components/Aboutme/Aboutme";

import Competences from "./components/Competence/Competences";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

function App() {

  return (

    <Container>

      <Banner>
        <Header />
        <Profilesection>
          <ProfileInfo />
        </Profilesection>
      </Banner>

      <Aboutme />

      <Competences />

      <LightColor>
        <Projects />
      </LightColor>

        <Contact />

    </Container>

  );

}

export default App;

const Container = styled.div``;

const Profilesection = styled.div`
background: url('/images/mainbackground.jpg') center/cover no-repeat;
  height: 90%;

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
