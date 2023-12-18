// Importation des dépendances nécessaires depuis styled-components et les composants créés
import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfileInfo from "./components/Banner/ProfileInfo";
import Competences from "./components/Competence/Competences";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";

// Définition du composant principal App
function App() {
  // Retourne la structure de la page avec les différents composants
  return (
    <Container>
      {/* Section de bannière comprenant le composant Header et le composant ProfileInfo */}
      <Banner>
        <Header />
        <Profilesection>
          <ProfileInfo />
        </Profilesection>
      </Banner>
      
      {/* Section des compétences */}
      <Competences />

      {/* Section des projets avec un fond de couleur claire */}
      <LightColor>
        <Projects />
      </LightColor>

      {/* Section de contact */}
      <Contact />
    </Container>
  );
}

// Exportation du composant App comme composant par défaut
export default App;

// Styles CSS-in-JS avec styled-components
const Container = styled.div``;

// Styles pour la section du profil avec une image de fond
const Profilesection = styled.div`
  background: url('/images/mainbackground.jpg') center/cover no-repeat;
  height: 90%;

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

// Styles pour la section de la bannière avec un dégradé de couleurs
const Banner = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
  height: 100vh;

  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
`;

// Styles pour la section des projets avec un fond de couleur claire
const LightColor = styled.div`
  background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
`;
