//Ceci sont les projets academiques de CDI
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import styled from 'styled-components';
import Project from './Project';

let data = [
    {
        img : "/images/demos/megaboutique.png",
        disc : "Projet de boutique en ligne Node.js et express",
        ref : "https://github.com/MaximeDenoncourt/megaboutique.git"
    },
    {
        img : "/images/demos/bibliothequeportcartier.png",
        disc : "Projet pour gestion de bibliothèque avec PhP et MySql",
        ref : "https://github.com/MaximeDenoncourt/bibliothequeportcartier.git"
    },
    {
        img : "/images/demos/multilocation.png",
        disc : "Projet application de gestion de locations de véhicules en C# et Sql Server",
        ref : "https://github.com/MaximeDenoncourt/multilocation.git"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };

const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`