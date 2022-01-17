import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';

function Footer() {
    return (
        <Container>
            <LeftCol>
                <ul>
                    <li><a href="#">About&nbsp;Disney+&nbsp;Hotstar</a></li>
                    <li><a href="#">Terms&nbsp;Of&nbsp;Use</a></li>
                    <li><a href="#">Privacy&nbsp;and&nbsp;Policies</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Feedback</a></li>
                </ul>
                <p>© 2021 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </LeftCol>
            <RightCol>
                <Connect>
                    <p>Connect&nbsp;with&nbsp;us</p>
                    <AppIconWraper>
                        <a href="#"><CustomFacebookIcon sx={{fontSize:40}}/></a>
                        <a href="#"><CustomTwitterIcon fontSize="large"/></a>
                    </AppIconWraper>

                </Connect>
                <AppArea>
                    <p>Disney+&nbsp;Hotstar&nbsp;App</p>
                    <IconWraper>
                        <ShopIcon/>
                        <InfoWrap>
                            <p>GET IT ON</p>
                            <h6>GooglePlay</h6>
                        </InfoWrap>
                    </IconWraper>
                    
                    <IconWraper>
                        <AppleIcon/>
                        <InfoWrap>
                            <p>DOWNLOAD ON THE</p>
                            <h6>AppStore</h6>
                        </InfoWrap>
                    </IconWraper>

                </AppArea>
            </RightCol>
        </Container>
    )
}

export default Footer

const Container = styled.footer`
    padding: 34px calc(3.5vw + 5px);
    overflow-x: hidden;
    position:relative;
    display:flex;
    justify-content: space-between;
    column-gap:30px;
    @media (max-width:768px){
        display:block;
    }
    @media (max-width:480px){
        margin-bottom:40px;
        }
`
const LeftCol = styled.div`
    
    ul{
        display:flex;
        padding:0;
        // justify-content: space-between;
        white-space: initial;
        column-gap:20px;
        flex-wrap: wrap;



        li{
            list-style:none;
            font-size:14px;
            a{
                text-decoration:none;
                color:#FFFFFFCC; 
                transition:200ms;
                &:hover{
                    color:#ffffff;
                }
            }
        }
    }
    p{
        font-size:12px;
        color:#FFFFFFCC; 
        max-width:500px;
    }
`
const RightCol = styled.div`
display:flex;
justify-content: space-between;
gap:3vh;    
@media (max-width:768px){
    justify-content: space-evenly;
 
}

p {
    font-size:14px !important;
    font-weight:600 !important;
    color:#FFFFFFCC;
}
`
const AppIconWraper = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const CustomFacebookIcon = styled(FacebookIcon)`
     color:#FFFFFFCC;
     transition;200ms;
     &:hover{
         color:#FFFFFF;
     }
`


const CustomTwitterIcon = styled(TwitterIcon)`
    color:#FFFFFFCC;
    transition;200ms;
     &:hover{
         color:#FFFFFF;
     }
`

const Connect = styled.div`

`
const AppArea = styled.div`
     display:flex;
     flex-direction:column;
     gap:5px;
     svg{
     margin-right:10px;

     }

`


const InfoWrap = styled.div`
        P{
            font-size:8px !important;
            font-weight:400 !important;
            margin: 0;
        }
`
const IconWraper = styled.div`
     display:flex;
     padding:8px 10px;
     align-items:center;
     background:#192133;
     border-radius:5px;
    //  max-width:140px;     
     h6{
         margin: 0;
     }
`