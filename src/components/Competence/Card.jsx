// Importation des dépendances nécessaires depuis React et styled-components
import React from 'react';
import styled from 'styled-components';

// Définition du composant Card
const Card = (props) => {
    const { Icon, disc, title } = props;

        // Retourne la structure de la carte avec l'icône, le titre et la description

    return (
    <Container>
        <span className='lightblue'><Icon/></span>
        <h1>{title}</h1>
        <p>{disc}</p>
    </Container>
    )
}

// Exportation du composant Card comme composant par défaut
export default Card;

// Styles CSS-in-JS avec styled-components
const Container = styled.div`
    width: 100%;
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1rem;
    text-align: center;
    span{
        font-size: 4rem;
    }
    
    h1{
        font-size: 1.2rem;
        padding-bottom: 1rem;
    }

    p{
        font-size: 0.8rem;
    }
`