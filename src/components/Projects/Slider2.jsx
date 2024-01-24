//Ceci sont les projets de sites web Wix
import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from 'react-slick';
import styled from 'styled-components';
import Project from './Project';

let data = [

    {
        img : "/images/demos/portfolio3d.png",
        disc : "Portfolio personnel professionnel animation 3d et synthèse d'images",
        ref : "https://maximedenoncourt.wixsite.com/portfolio"
    },
    {
        img : "/images/demos/immoval.png",
        disc : "Projet professionnel pour la compagnie Immo-val Construction. Design de site web en ligne et logo et hébergé sur Wix.com",
        ref : "https://www.immo-val.ca/"
    },
    {
        img : "/images/demos/toiturehe.png",
        disc : "Projet professionnel pour la compagnie Toiture H&E. Design de site web en ligne et logo et hébergé sur Wix.com",
        ref : "https://heconstruction.wixsite.com/hetoiture"
    },
    {
        img : "/images/demos/commerceak.png",
        disc : "Projet professionnel pour la compagnie Commerce A&K. Design de site web en ligne et logo et hébergé sur Wix.com",
        ref : "https://www.carsforsalemtl.ca/"
    },
        
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

const SliderComp2 = () => {

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

export default SliderComp2;

const Container = styled.div`
    position: relative;
`

const Buttons = styled.div`
    button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #05d1ff;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
}

.back{
    left: -1rem;
}
`