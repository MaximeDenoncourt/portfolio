import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import styled from 'styled-components';
import SliderComp from './Slider';
import SliderComp2 from './Slider2';

const Projects = () => {
    return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="lightblue">Projects</span></h1>
            <p>Ci-dessous se trouve les liens a mes repository de mes différents projets mettant de l'avant mes divers connaissances au niveaux des differents langages et frameworks.</p>
        </Zoom>
        <Slide>
            <SliderComp/>
        </Slide>
        <Zoom>
            <h1>Recent <span className="lightblue">Sites internet</span></h1>
            <p>Ci-dessous se trouve les liens de mes sites internet ainsi que mon portfolio d'animation 3D personnel</p>
        </Zoom>
        <Slide>
            <SliderComp2/>
        </Slide>
    </Container>
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`

const Slide = styled.div``