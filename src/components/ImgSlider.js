import React from 'react'
import Slider from "react-slick";
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      };
    return (
        <Carousel {...settings}>
            <Wrapper>
                <Banner src="images/slider-badag.jpg"/>
            </Wrapper>
            <Wrapper>
                <Banner src="images/slider-badging.jpg"/>
            </Wrapper>
            <Wrapper>
                <Banner src="images/slider-scale.jpg"/>
            </Wrapper>
            <Wrapper>
                <Banner src="images/slider-scales.jpg"/>
            </Wrapper>
        </Carousel>
    )
}

export default ImgSlider

const Carousel = styled(Slider)`
    .slick-list {
        overflow : visible;
    }
    Button{
       z-index:1;
   } 
`

const Wrapper = styled.div`
`
const Banner = styled.img`
    border-radius:10px;
    width:100%;
    border: 4px solid transparent;
    &:focus {
        border:none;
    }
`