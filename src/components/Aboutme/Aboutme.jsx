// Page About me
// Importation des dépendances nécessaires depuis React, React-icons et styled-components
import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import styled from 'styled-components';

// Définition du composant
const Aboutme = () => {

    // État local pour gérer l'affichage du menu sur les petits écrans
    const [bar] = useState(false);

    // Retourne la structure du composant
    return (

    <Container bar={bar}>

        <div>
            <Slide direction="down">
                <h4>À <span className="lightblue">propos</span></h4>
            </Slide>
        </div>

        <div>
        <p style={{ margin: '60px' }}>
            Je m'appelle Maxime Denoncourt, un programmeur analyste passionné par l'intersection entre 
            la créativité et la technologie. Titulaire d'un diplôme en animation 3D et synthèse d'image 
            du Collège de Bois de Boulogne, j'ai décidé d'approfondir mes compétences en programmation 
            avancée au Collège de CDI, où j'ai brillamment conclu mes études en 2023. Mon parcours 
            académique m'a équipé d'une compréhension approfondie des concepts artistiques et des compétences 
            techniques nécessaires pour exceller dans le monde du développement logiciel. Mon engagement 
            envers l'innovation, la résolution de problèmes et la recherche constante de perfectionnement 
            se reflètent dans mes projets.
        </p>

            {/* Deuxième section a droite avec l'image*/}
            <Slide direction="right">

            </Slide>
        </div>

    </Container>

    )

}


export default Aboutme

// Styles CSS-in-JS avec styled-components
const Container = styled.div`

    // Styles pour la section du conteneur du Aboutme
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem 0;
    position: relative;
    animation: header 500ms ease-in-out;
    @media(max-width: 840px){
        width: 90%;
    }
    .bars{
        display: none;
    }
`

