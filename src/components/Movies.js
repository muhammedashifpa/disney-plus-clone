import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Movies(props) {
  var settings = {
    infinite: false,
    speed: 700,
    slidesToShow: 8,
    slidesToScroll:6 ,
    lazyLoad: true,
    // focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
  };
    return (
        <Container>
            <h4>{props.title}</h4>
            <Carousel {...settings}>
              <Wrap>
                <img src="\images\thumbnails\674470-v.webp"/>
              </Wrap>
               <Wrap>
                <img src="\images\thumbnails\674511-v.webp"/>
              </Wrap> 
              <Wrap>
                <img src="\images\thumbnails\753486-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="images\thumbnails\875150-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875157-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875199-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875211-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875239-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875199-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875211-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875239-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875199-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\674470-v.webp"/>
              </Wrap>
               <Wrap>
                <img src="\images\thumbnails\674511-v.webp"/>
              </Wrap> 
              <Wrap>
                <img src="\images\thumbnails\753486-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="images\thumbnails\875150-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875211-v.webp"/>
              </Wrap>
              <Wrap>
                <img src="\images\thumbnails\875239-v.webp"/>
              </Wrap>
            </Carousel>
        </Container>
    )
}

export default Movies

const Container = styled.div`
gap:1vw;
  margin-bottom:20px;
  @media(max-width:768px){
      margin-bottom:1vh;

  }
  overflow: visible;
`
const Carousel = styled(Slider)`
.slick-list {
    overflow : visible;
    gap:1vw;
    transform: none !important;
}
.slick-slider div { transition: none !important; }
Button{
   z-index:1;
} 
box-shadow:none;
@media (max-width:480px){
    .slick-arrow{
      display:none !important;
    }
}

`

const Wrap = styled.div`
    cursor:pointer;  
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s; 
    &:hover{
      transform: scale(1.1);
  } 
    img{
      border-radius:10px;
      width:100%;
      height:100%;
      border: 4px solid transparent;
      &:focus {
          border:none;
      }
    }
     

`  