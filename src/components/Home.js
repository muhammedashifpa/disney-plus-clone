import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
function Home() {
    return (
        <Container>
            
            <ImgSlider/>
            <Viewers/>
            <Movies title={"Recommend For You"}/>
            <Movies title={"New To Disney+"}/>
            <Movies title={"Hit Movies"}/>
        </Container>
    )
}

export default Home


const Container = styled.main`
    // height: calc(100vh - 80px);
    padding: 0 calc(3.5vw + 5px);
    overflow-x: hidden;
    position:relative;
`
