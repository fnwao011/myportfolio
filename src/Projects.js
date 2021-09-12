import styled from "styled-components";
import Tilt from 'react-tilt';

const Projects = () => {

    return (
        <div id='projects'>
            <Container>
                <Title>PROJECTS</Title>
                <ProjectContainer>
                    <TextContainer>
                        <SubTitle>CLEARFACE FACIAL RECOGNITION</SubTitle>
                        <TextBody>Facial recognition app that runs using the Clarifai API. Allows the user to signin and register, then once logged in the user may upload a picture with a face in it. Built using React, NodeJS, ExpressJS, and SQL.</TextBody>
                        <CodeButton href='https://github.com/fnwao011/FaceRecognition' target="_blank">Source Code</CodeButton>
                    </TextContainer>
                    <ImgContainer>
                        <Tilt className="Tilt" options={{ max: 30 }} >
                            <ProjectImage src='/facesc.png' alt='Project Pic'></ProjectImage>
                        </Tilt>

                    </ImgContainer>


                </ProjectContainer>

                <ProjectContainer>
                    <TextContainer>
                        <SubTitle>CLINIC++</SubTitle>
                        <TextBody>Created a walk-in clinic app that allows users to make accounts as well as clinic employees to manage patients. The app allows patients to find the nearest walk-in clinic and notify them of appointments.UI coded using XML and Android Studio, Coded backend using Java, and Managed data input and storage (database) using Firebase</TextBody>
                        <CodeButton href='https://github.com/SEG2105-uottawa/seg2105-project-team-f19-13' target='_blank'>Source Code</CodeButton>
                    </TextContainer>
                    <ImgContainer>
                        <Tilt className="Tilt" options={{ max: 30 }} >
                            <ProjectImage src='/clinicsc.png' alt='Project Pic'></ProjectImage>
                        </Tilt>

                    </ImgContainer>


                </ProjectContainer>
            </Container>
        </div>
    )
}

const Container = styled.div`
    display:flex;
    flex-direction: column;
    
`
const ProjectContainer = styled.div`
    display:flex;
    flex-direction:row;
    margin-top:3rem;
    justify-content: space-between;
    align-items:center;
    padding:0 4rem;
    
    @media(max-width:768px){
        flex-direction:column;
    }
  
    
`
const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:30%;
    align-items:center;
    @media(max-width:768px){
        text-align: center;
        justify-content:center;
        width:auto;
    }

   
`

const SubTitle = styled.h2`
    font-size:1.5rem;
    color:#7b7fda;
    text-align:center;
    padding:1rem 2rem;
    margin-bottom:0;
    
`
const TextBody = styled.p`
    font-size:0.9rem;
    color:#301934;
    text-align:left;
    padding: 0 2rem;
    line-height:1.5;
    margin-top:0;
`

const ImgContainer = styled.div`
   // background-color:red;
    width:60%;
    
`
const ProjectImage = styled.img`
    //padding: 1 2rem;
    //margin-left:5rem;
    width: 100%;
    //height: auto;
    object-fit: cover;
    
    
`

const CodeButton = styled.a`
    background-color: #3CB371;
    color:white;
    border: 1px solid #3CB371;
    border-radius: 10px;
    display:inline-block;
    text-decoration: none;
    font-weight:700;
    padding:0.5rem 1rem;
    font-size:0.9rem;
    width:30%;
    cursor: pointer;
    @media(max-width:768px){
        margin-bottom:1rem;
    }

    &:hover{
        background-color:#7b7fda;
    }
`

const Title = styled.h1`
    font-size:2.5rem;
    color:#7b7fda;
    text-align:center;
    margin-top:1.5rem;
`

export default Projects;