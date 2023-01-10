import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Pages/Home';
import { Container, Content } from './style/global';

const theme ={
  dark:{
    primary: "#C778DD",
    text: "#ABB2BF",
    background:"#282C33"
  },
  light:{
    primary: "#C778DD",
    text: "#282C33",
    background:"#ABB2BF"
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme.dark.background} color={theme.dark.text}>
        <Content>
          <Navbar/>
          <Home/>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
