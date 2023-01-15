import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
import { ThemeProvider } from 'styled-components';
import { FunFacts } from './components/FunFacts/FunFacts';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './components/Pages/Home';
import { Quote } from './components/Quote/Quote';
import { AboutMe } from './components/Sections/AboutMe/AboutMe';
import { Contacts } from './components/Sections/Contacts/Contacts';
import { Footer } from './components/Sections/Footer/Footer';
import { Projects } from './components/Sections/Projects/Projects';
import { Skills } from './components/Sections/Skills/Skills';
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

export function App() {

  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef,{
    root:null,
    rootMargin:"0px",
    threshold:0.5,
  })

  const fadeIn = (element:any)=>{
    gsap.to(sectionRef.current, {
      duration:0.5,
      opacity:1,
      y:-60,
      ease:"power4.out",
      stagger: {
        amount: 0.3
      }
    })
  }

  const fadeOut = (element:any)=>{
    gsap.to(sectionRef.current, {
      duration:0.5,
      opacity:0,
      y:-20,
      ease:"power4.out",
    })
  }


  intersection && intersection.intersectionRatio < 0.2 ? fadeOut(".fadeIn") : fadeIn(".fadeIn");
  

  return (
    <ThemeProvider theme={theme}>
      <Container theme={theme.dark.background} color={theme.dark.text}>
        <Content>
          <Navbar/>
          <Home/>
          <Quote/>
          <div className='fadeIn' ref={sectionRef}><Projects/></div>
          <Skills/>
          <AboutMe/>
          <FunFacts/>
          <Contacts/>
          <Footer/>
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default App;
