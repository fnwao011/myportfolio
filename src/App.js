import React, { Fragment } from 'react';
import styled from 'styled-components'
import Navbar from './Navbar';
import Hero from './Hero'
import About from './About'
import Projects from './Projects';
import Footer from './Footer';
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

const App = () => {
  return (

    <div>


      <Container>
        <Navbar />
        <Slide left>
          <Hero />
        </Slide>
        <Fade >
          <About />
          <Projects />
        </Fade>
        <Footer />
      </Container>



    </div>


  );
}

const Container = styled.div`
    height: 100vh;
    display:flex;
    flex-direction:column;
    
`;



export default App;
