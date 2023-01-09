import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Container } from './style/global';

const theme ={
  dark:{
    primary: "#C778DD",
    text: "#fff",
    background:"#282C33"
  },
  light:{
    primary: "#C778DD",
    text: "#282C33",
  }
}

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme.dark.background} color={theme.dark.text}>
        hello
      </Container>
    </ThemeProvider>
  );
}

export default App;
