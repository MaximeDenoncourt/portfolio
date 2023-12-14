import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaLinkedinIn } from "react-icons/fa";
import { GiEarthAmerica } from "react-icons/gi";
import styled from "styled-components";

const ProfileInfo = () => {

  return (

    <Container id="accueil">

      <Slide direction="left">

        <Texts>

          <h4><span className="lightblue">Bonjours</span></h4>

          <h1 className="lightblue">Maxime Denoncourt</h1>

          <h3>Programmeur analyste junior</h3>

          <p>
          Diplômé récemment en tant que Programmeur Analyste et passionné de programmation, je suis à 
          la recherche d'un stage/emploi pour mettre en pratique mes compétences au sein d'une équipe 
          dynamique dans un environnement stimulant et propice au développement.
          </p>
          
          <button>Me joindre</button>

          <button>Télécharger mon CV</button>

          <Social>

            <p>Mes réseaux sociaux :</p>

            <div className="social-icons">

              <span>
                <a href="/">
                  <GiEarthAmerica />
                </a>
              </span>

              <span>
                <a href="/">
                  <FaLinkedinIn />
                </a>
              </span>

            </div>

          </Social>

        </Texts>

      </Slide>

      <Slide direction="right">

        <Profile>

          <img
            src="https://res.cloudinary.com/ghazni/image/upload/v1659082282/Yt-portfolio/Untitled-1_drcspz.png"
            alt="profile"
          />
          
        </Profile>

      </Slide>

    </Container>

  );

};

export default ProfileInfo;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    display: flex;
    padding: 0.7rem 2rem;
    margin-top: 1rem;
    cursor: pointer;
    background-color: #05d1ff;
    border: none;
    color: #fff;
    font-weight: 500;
    
    :hover {
      filter: drop-shadow(0px 4px 4px #05d1ff);
    }
  }
`;
const Social = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #05d1ff;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
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
