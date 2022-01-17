import React from 'react'
import styled from 'styled-components'

function Viewers() {
    return (
        <Container>
            <Wrap>
                <video loop muted autoplay="true" playsInline="true">
                    <source src="videos\1564674844-disney.mp4" type="video/mp4"/>
                </video>
                <img src="images/viewers-disney.png"/>
            </Wrap>
            <Wrap>
                <img src="images/viewers-marvel.png"/>
                <video loop muted autoplay="true" playsInline="true">
                    <source src="videos\1564676115-marvel.mp4" type="video/mp4"/>
                </video>

            </Wrap>
            <Wrap>
                <img src="images/viewers-national.png"/>
                <video loop muted autoplay="true" playsInline="true">
                    <source src="videos\1564676296-national-geographic.mp4" type="video/mp4"/>
                </video>

            </Wrap>
            <Wrap>
                <img src="images/viewers-pixar.png"/>
                <video loop muted autoplay="true" playsInline="true">
                    <source src="videos\1564676714-pixar.mp4" type="video/mp4"/>
                </video>
            </Wrap>
            <Wrap>
                <img src="images/viewers-starwars.png"/>
                <video loop muted autoplay="true" playsInline="true">
                    <source src="videos\1608229455-star-wars.mp4" type="video/mp4"/>
                </video>
            </Wrap>
        </Container>
        
    )
}

export default Viewers

const Container = styled.div`
    margin-top:30px;
    display:grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap:1vw;
    @media(max-width:768px){
        margin-top:1vh;

    }
    margin-bottom:20px;
    @media(max-width:768px){
        margin-bottom:1vh;

    }
`
const Wrap = styled.div`
    background: linear-gradient(to bottom, #334366, #334366, #1c2940);
    border-radius:5px;
    cursor:pointer;  
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s; 
    position:relative;
    overflow: hidden;
    &:hover{
        transform: scale(1.1);
        video{
            opacity:1;
        }
    }  

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
    video {
        border-radius:5px;
        object-fit: fill;
        width:100%;
        height:auto;
        position: absolute;
        top: 0;
        left: 0;
        z-index:-1;
        opacity:0;
        transition:550ms ease-in;   
        @media(max-width:480px){
            display:none;
        }
    }
  

`
