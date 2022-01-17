import React from 'react'
import InputAdornment from '@mui/material/InputAdornment';
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';


function Header() {
    return (
            <CustomBox sx={{ flexGrow: 1, position:'fixed',top: 0,left: 0,right: 0, }}>
                <CustomAppBar position="static">
                    <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                    <MenuIcon />
                    </IconButton>
                    <LeftMenu>
                        <Logo src="images/logo.svg"/>
                        <NavMenu>
                            <ul>
                                <li><a><div>TV</div></a></li>
                                <li><a><div>Movies</div></a></li>
                                <li><a><div>Sports</div></a></li>
                                <li><a><div>Disney+</div></a></li>
                                <li><a><div><img src="images/kids.svg"/></div></a></li>
                            </ul>
                        </NavMenu>
                    </LeftMenu>
                    <RightMenu>
                        <SearchBar>
                            <FormControl variant="standard">
                                <Input
                                id="input-with-icon-adornment" placeholder="Search"
                                endAdornment={
                                    <InputAdornment position="end">
                                    <SearchIcon />
                                    </InputAdornment>
                                }
                                />
                            </FormControl>
                        </SearchBar>
                        <SubButton variant="contained">SUBSCRIBE</SubButton>
                        <LoginButton color="primary">Login</LoginButton>
                        <SearchIconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="Search"
                            // sx={{ ml: 2 }}
                            >
                            <SearchIcon />
                        </SearchIconButton>
                    </RightMenu>
                    </Toolbar>
                </CustomAppBar>
            </CustomBox>
        
    )
}

export default Header

const CustomBox = styled(Box)`
    z-index:999;
`

const CustomAppBar = styled(AppBar)`
    height:80px;
    justify-content: center;
    background:#121926!important;
    box-shadow:none;
    @media (max-width:480px){
        height:60px;
    }
    

`
const LeftMenu = styled.div`
    display:flex;
    align-items:center;
    flex:1;
`
const Logo = styled.img`
    width:70px;
    padding-bottom:15px;
    @media (max-width:480px){
        padding-bottom:8px;
    }
`

const NavMenu = styled.div`
    display:flex;
    @media (max-width:1200px){
        display:none;
    }
    ul{
        display:flex;
        margin:0;
        padding:0;
        li{
            list-style: none;
            a{
                display:inline-block;
                padding:20px 15px;
                cursor:pointer;
                div{
                    color:#FFFFFFCC;
                    font-weight:400;
                    &:hover {
                        color:#fff;
                    }
                }
            }
        }
    }
`
const RightMenu = styled.div`
    display:flex;
    align-items:center;

`
const SearchBar = styled.div`
    @media (max-width:770px){
        display:none;
    }

`
const SubButton = styled(Button)`
    margin: 0 10px !important;
    background:#1f80e0 !important;
    color:#fff !important;
    @media (max-width:600px){
        font-size:8px !important;
        padding:5px 0 !important;
    }
    @media (max-width:260px){
        display:none;
    }
    @media (max-width:769px){
        margin-right:20px !important;
    }

    
`
const LoginButton = styled(Button)`
    @media (max-width:769px){
        display:none !important;
    }
`
const SearchIconButton = styled(IconButton)`
    @media (min-width:771px){
        display:none !important;
    }

`
