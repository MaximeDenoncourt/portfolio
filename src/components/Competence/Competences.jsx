// Importation des dépendances nécessaires depuis React, react-awesome-reveal et styled-components
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

// Définition du composant Competences
const Competences = () => {

  // Retourne la structure du composant Competences
  return (
    <Container id="competence">
      {/* Section avec l'effet de transition vers le bas */}
      <Slide direction="down">
        <h4>Mes <span className="lightblue">compétences</span></h4>
        <h1>Ce que j'ai appris au cours de ma formation chez Collège CDI</h1>
      </Slide>

      {/* Section avec les cartes représentant les compétences */}
      <Cards>
        {/* Section avec l'effet de transition vers la gauche */}
        <Slide direction="left">
          {/* Carte pour les bases de données */}
          <Card
            Icon={BsDatabaseCheck}
            title={"Bases de données"}
            disc={`MySQL, T-SQL, Microsoft SQL Server, MongoDB`}
          />
        </Slide>
        
        {/* Section avec l'effet de transition vers la gauche */}
        <Slide direction="left">
          {/* Carte pour le développement de logiciels */}
          <Card
            Icon={SiBmcsoftware}
            title={"Développement de logiciels"}
            disc={`Android Studio, Visual Studio, Visual Studio Code`}
          />
        </Slide>
      </Cards>

      {/* Section avec les cartes représentant les compétences */}
      <Cards>
        {/* Section avec l'effet de transition vers la droite */}
        <Slide direction="right">
          {/* Carte pour le cloud computing */}
          <Card
            Icon={FaCloudversify}
            title={"Cloud computing"}
            disc={`Amazon Web Service et Microsoft Azure`}
          />
        </Slide>

        {/* Section avec l'effet de transition vers la droite */}
        <Slide direction="right">
          {/* Carte pour l'interface utilisateur graphique */}
          <Card
            Icon={FaLaptopCode}
            title={"Interface utilisateur graphique"}
            disc={`JavaFX, Architecture MVC et WPF`}
          />
        </Slide>
      </Cards>

      {/* Section avec les cartes représentant les compétences */}
      <Cards>
        {/* Section avec l'effet de transition vers la gauche */}
        <Slide direction="left">
          {/* Carte pour GitHub */}
          <Card
            Icon={FaGithub}
            title={"Github"}
            disc={`Git, Github`}
          />
        </Slide>

        {/* Section avec l'effet de transition vers la gauche */}
        <Slide direction="left">
          {/* Carte pour la programmation informatique */}
          <Card
            Icon={GoFileCode}
            title={"Programmation informatique"}
            disc={`C#, Java, Kotlin, PHP`}
          />
        </Slide>
      </Cards>

      {/* Section avec les cartes représentant les compétences */}
      <Cards>
        {/* Section avec l'effet de transition vers le haut */}
        <Slide direction="up">
          {/* Carte pour la programmation orientée objet */}
          <Card
            Icon={FiCodepen}
            title={"Programmation orientée objet"}
            disc={`Java, C#, JavaScript, PHP`}
          />
        </Slide>

        {/* Section avec l'effet de transition vers le haut */}
        <Slide direction="up">
          {/* Carte pour la programmation bilingue */}
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

// Exportation du composant Competences comme composant par défaut
export default Competences;

// Styles CSS-in-JS avec styled-components
const Container = styled.div`
  // Styles pour la section du conteneur
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
  // Styles pour la section des cartes
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
