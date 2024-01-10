import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';


const About = () => {
    return (
        <div id='about' class='about'>
            <Container>
                <Title>
                    ABOUT ME
                </Title>
                <InnerWrapper>
                    <Left>
                        <ImageWrapper>
                            <Tilt className="Tilt" options={{ max: 50 }} >
                                <Profile width='275' height='183' src='/profile.jpg' alt='profile'></Profile>
                            </Tilt>

                        </ImageWrapper>
                    </Left>

                    <Right>
                        <BodyText>
                            <ContentWrapper>
                                Hello! My name is Fabian Nwaoha. I just finished my BSc in Computer Science at the University of Ottawa, and it was a great experience. I have been coding since high school so reading code is nothing new to me. I’ve bounced from language to language to expand my knowledge and expose myself to different types of programming concepts. When I’m not coding though, I’m either watching sports, studying, or at the gym.

                            </ContentWrapper>
                        </BodyText>
                        <ResumeBtn href='/Engineering.pdf' target="_blank">View Resume</ResumeBtn>
                    </Right>
                </InnerWrapper>

            </Container>
        </div>
    );
}

const Container = styled.div`
    display: flex;
    background-color:#7b7fda;
    flex-direction:column;
    flex-wrap:wrap;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  @media(max-width:768px){
    -webkit-clip-path: none;
    clip-path: none;
  }
    
    
 
    
`

const InnerWrapper = styled.div`
    display:flex;
    margin-top:3rem;

    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
   
    
`
const Title = styled.h1`
    font-size:2.5rem;
    color:white;
    text-align:center;
    margin-top:2rem;

    @media(max-width:768px){
        font-size:1.7rem;
        margin-bottom:0;
    }
    
`

const Left = styled.div`
    width:50%;
    @media(max-width:768px){
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:auto;
    }
`

const Right = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
@media(max-width:768px){
        
        width:auto;
    }
`

const BodyText = styled.p`
    font-size:0.9rem;
    color:white;
    text-align:left;
    padding: 0 2rem;

    @media(max-width:768px){
        text-align:center;
    }
    
    
`
const ImageWrapper = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
`

const ContentWrapper = styled.div`
  
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;

   
   

`
const Profile = styled.img`
    padding: 1 2rem;
    margin-left:5rem;

    @media(max-width:768px){
        padding: 0 1rem;
        margin-left:0;
    }
    

`

const ResumeBtn = styled.a`
    background-color: #3CB371;
    color:white;
    border: 1px solid #3CB371;
    border-radius: 10px;
    display:inline-block;
    text-decoration: none;
   
    font-weight:700;
    padding:0.5rem 1rem;
    
    font-size:0.9rem;

    cursor: pointer;

    

    &:hover{
        transform: translateY(-0.25em);
        box-shadow: 0 0.3rem 0.5rem -0.4rem #3CB371;
    }
`



export default About;