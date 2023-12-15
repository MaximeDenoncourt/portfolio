import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsDatabaseCheck } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { FaCloudversify, FaGithub } from "react-icons/fa6";
import { FiCodepen } from "react-icons/fi";
import { GoFileCode } from "react-icons/go";
import { GrLanguage } from "react-icons/gr";
import { SiBmcsoftware } from "react-icons/si";


import styled from "styled-components";
import Card from "./Card";

const Competences = () => {

  return (

    <Container id="competence">

      <Slide direction="down">

        <h4>

          Mes <span className="lightblue">compétences</span>
          
        </h4>

        <h1>Ce que j'ai appris au cours de ma formation chez Collège CDI</h1>

      </Slide>

      <Cards>

        <Slide direction="left">

          <Card
            Icon={BsDatabaseCheck}
            title={"Bases de données"}
            disc={`MySQL, T-SQL, Microsoft SQL Server, MongoDB`}

          />

        </Slide>
        
        <Slide direction="left">

          <Card
            Icon={SiBmcsoftware}
            title={"Développement de logiciels"}
            disc={`Android Studio, Visual Studio, Visual Studio Code`}
          />

        </Slide>

      </Cards>

      <Cards>

        <Slide direction="right">

        <Card
          Icon={FaCloudversify}
          title={"Cloud computing"}
          disc={`Amazon Web Service et Microsoft Azure`}
        />

        </Slide>

        <Slide direction="right">

          <Card
            Icon={FaLaptopCode}
            title={"Interface utilisateur graphique"}
            disc={`JavaFX, Architecture MVC et WPF`}

          />

        </Slide>

      </Cards>

      <Cards>

        <Slide direction="left">

          <Card
            Icon={FaGithub}
            title={"Github"}
            disc={`Git, Github`}
          />

        </Slide>

        <Slide direction="left">

          <Card
            Icon={GoFileCode}
            title={"Programmation informatique"}
            disc={`C#, Java, Kotlin, PHP`}
          />

        </Slide>

      </Cards>

      <Cards>
        
      <Slide direction="up">

      <Card
        Icon={FiCodepen}
        title={"Programmation orientée objet"}
        disc={`Java, C#, JavaScript, PHP`}

      />

      </Slide>

      <Slide direction="up">

      <Card
        Icon={GrLanguage}
        title={"Programmation bilingue"}
        disc={`Français et Anglais`}
      />

      </Slide>
      </Cards>

    </Container>

  );

};

export default Competences;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
