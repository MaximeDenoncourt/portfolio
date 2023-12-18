// Importation des dépendances nécessaires depuis React, React-icons et styled-components
import React, { useState } from 'react';
import { GiCandleFlame } from "react-icons/gi";
import styled from 'styled-components';

// Définition du composant Header
const Header = () => {

    // État local pour gérer l'affichage du menu sur les petits écrans
    const [bar, setBar] = useState(false);

    // Retourne la structure du composant Header
    return (

    <Container bar={bar}>

        {/* Logo avec une flamme et le titre du portfolio */}
        <Logo>
            <span className='lightblue'><GiCandleFlame/></span>
            <h1>Mon Portfolio</h1>
        </Logo>

        {/* Navigation avec des liens vers différentes sections de la page */}
        <Nav bar={bar}>
            <span><a href="#accueil">Accueil</a></span>
            <span><a href="#competence">Compétences</a></span>
            <span><a href="#project">Projects</a></span>
            <span><a href="#contact">Contactez-moi</a></span>
        </Nav>

        {/* Icône de menu pour les petits écrans */}
        <div
        onClick={() => setBar(!bar)}
        className="bars">
            <div className="bar"></div>
        </div>

    </Container>

    )

}

// Exportation du composant Header comme composant par défaut
export default Header

// Styles CSS-in-JS avec styled-components
const Container = styled.div`

    // Styles pour la section du conteneur du header
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

    @media(max-width:640px){

        // Styles pour la barre de menu sur les petits écrans
        .bars{
            width: 40px;
            height: 40px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem;
            z-index: 100;

            // Styles pour les barres de la barre de menu
            .bar{
                position: absolute;
                width: 100%;
                height: 2px;
                background-color: ${props => props.bar ? "transparent" : "#fff"};
                transition: all 400ms ease-in-out;
                :before, :after{
                    content: "";
                    width: 100%;
                    height: 2px;
                    background-color: #fff;
                    position: absolute;
                }

                :before{
                    transform: ${props => props.bar ? "rotate(45deg)" : "translateY(10px)"};
                    transition: all 400ms ease-in-out;
                }

                :after{
                    transform: ${props => props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
                    transition: all 400ms ease-in-out;
                }
            }
        }
    }
`

// Styles pour la section du logo
const Logo = styled.div`

    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`

// Styles pour la section de la navigation
const Nav = styled.div`
    @media(max-width:640px){
        position: fixed;
        display: flex;
        flex-direction: column;
        background-color: #01be96;
        inset: 0;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        gap: 2rem;
        font-weight: 700;
        height: ${props => props.bar ? "100vh" : 0};
        transition: height 400ms ease-in-out;
        overflow: hidden;
        z-index: 100;
    }
    span{
        margin-left: 1rem;
        a{
            color: #fff;
            text-decoration: none;
            font-weight: 400;
            position: relative;
            :before{
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                height: 2px;
                background-color: #fff;
                transform: scale(0);
                transform-origin: right;
                transition: transform 400ms ease-in-out;
            }
            :hover:before{
                transform: scale(1);
                transform-origin: left;
            }
            :hover{
                opacity: 0.7;
            }
        }
    }
`