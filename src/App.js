import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header'
import Home from './components/Home'
import BottomNav from './components/BottomNav';
import Detail from './components/Detail';
import './App.css';
import Footer from './components/Footer'
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );


  return (
   <ThemeProvider theme={theme}>
     <CssBaseline />
      <div className="App">
        <Router>
          <Header/>
          <DummyHeader/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
          <Footer/>
          <BottomNav/>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;


const DummyHeader = styled.div`
height:80px;

box-shadow:none;
@media (max-width:480px){
    height:60px;
}


`


