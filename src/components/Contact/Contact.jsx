// Importation des dépendances nécessaires depuis React et react-awesome-reveal et styled-components
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";
import styled from "styled-components";

// Définition du composant Contact
const Contact = () => {
  // Fonction pour faire défiler vers le haut de la page
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  // Retourne la structure du composant Contact
  return (
    <Container id="contact">
      {/* Section du profil */}
      <Profile>
        {/* Section avec l'effet de transition vers la gauche et un délai de 1 milliseconde */}
        <Slide direction="left" delay={1}>
          <h1>Me rejoindre</h1>
        </Slide>

        {/* Section pour l'adresse */}
        <div className="address">
          {/* Section avec l'effet de transition vers la gauche */}
          <Slide direction="left">
            <h1>Adresse:</h1>
          </Slide>
          {/* Section avec l'effet de transition vers la gauche */}
          <Slide direction="left">
            <p>9017 Rue Jamay, Montréal, QC H1R 2L2</p>
          </Slide>
        </div>

        {/* Section pour les contacts directs */}
        <div className="links">
          {/* Section avec l'effet de transition vers la gauche */}
          <Slide direction="left">
            <h1>Contactez-moi directement:</h1>
          </Slide>

          {/* Section pour les numéros de téléphone et les adresses e-mail */}
          <div>
            <span>
              <FiPhoneCall />
            </span>
            {/* Section avec l'effet de transition vers la gauche */}
            <Slide direction="left">
              <a href="tel:+4733378901">+1 514 802 1861</a>
            </Slide>
          </div>

          <div>
            {/* Section avec l'effet de transition vers la gauche */}
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:denmax96@gmail.com">denmax96@gmail.com</a>
            </Slide>
          </div>
        </div>

        {/* Section pour les profils en ligne */}
        <div className="profiles">
          {/* Section avec l'effet de transition vers la gauche */}
          <Slide direction="left">
            <h1>Voir mon profil en ligne</h1>
          </Slide>

          {/* Section pour les icônes des réseaux sociaux */}
          <div className="icons">
            {/* Section avec l'effet de zoom */}
            <Zoom>
              <span>
                <a href="/">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="/">
                  <BsSlack />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        {/* Section avec l'effet de fondu */}
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>

      {/* Section du formulaire de contact */}
      <Form>
        {/* Section avec l'effet de transition vers la droite */}
        <Slide direction="right">
          <form>
            {/* Section pour le nom */}
            <div className="name">
              <span>
                <CgProfile />
              </span>
              <input type="text" placeholder="Votre nom..." />
            </div>

            {/* Section pour l'adresse e-mail */}
            <div className="email">
              <span>
                <MdAlternateEmail />
              </span>
              <input type="email" placeholder="Email..." />
            </div>

            {/* Section pour le message */}
            <div className="message">
              <span className="messageIcon">
                <FiMail />
              </span>
              <textarea cols="30" rows="10" placeholder="Message..."></textarea>
            </div>

            {/* Bouton d'envoi */}
            <button>Envoyer</button>
          </form>
        </Slide>
      </Form>
    </Container>
  );
};

// Exportation du composant Contact comme composant par défaut
export default Contact;

// Styles CSS-in-JS avec styled-components
const Container = styled.div`
  // Styles pour la section du conteneur
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Profile = styled.div`
  // Styles pour la section du profil
  flex: 1;

  .address {
    padding: 1rem 0;

    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;

      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      a {
        text-decoration: none;
        color: lightgray;

        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;

const ArrowUp = styled.div`
  // Styles pour la flèche de retour en haut
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;

  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;

const Form = styled.div`
  // Styles pour la section du formulaire
  flex: 1;

  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;

    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;

      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }

      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
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
  }
`;
