import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
function BottomNav() {
    const [value, setValue] = React.useState(0);
    return (
        <Custompaper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigationC
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >   
                <BottomNavigationActionC label="Recents" icon={<HomeIcon />} />
                <BottomNavigationActionC label="Favorites" icon={<LiveTvIcon />} />
                <BottomNavigationActionC icon={<Logo src="images/logo.svg"/>} />
                {/* <Logo src="images/logo.svg"/> */}
                <BottomNavigationActionC label="Nearby" icon={<MovieIcon />} />
                <BottomNavigationActionC label="Nearby" icon={<SportsBasketballIcon />} />
            </BottomNavigationC>
        </Custompaper>
    )
}

export default BottomNav

const Custompaper = styled(Paper)`
    @media (min-width:480px){
    display:none !important;
    }

`

const BottomNavigationC = styled(BottomNavigation)`
    height:60px;
    background:#121926!important;
`

const BottomNavigationActionC = styled(BottomNavigationAction)`
    grid-template-columns: repeat(1fr) !important;
    min-width:20px;
    padding: 0 !important;
    span{
        // display:flex;
        font-size:0.7rem !important;

`
const Logo = styled.img`
    pdding:0 !important;
`
