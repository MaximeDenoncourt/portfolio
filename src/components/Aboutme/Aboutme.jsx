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
            <Slide direction="left">
                <p>Ceci est ma description de mon parcours</p>
            </Slide>

            {/* Deuxième section a droite avec l'image*/}
            <Slide direction="right">

            <Photo>
                <img
                    src=""
                    alt="profile"
                />
            </Photo>

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
// Styles pour la section du profile
const Photo = styled.div`
    img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #05d1ff);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
    width: 20rem;
    }

    @media (max-width: 660px) {
        width: 18rem;
    }

    @media (max-width: 640px) {
        width: 100%;
    }
}

    :hover img {
    transform: translateY(-10px);
    }
`;

