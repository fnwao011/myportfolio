import React from 'react';
import styled from 'styled-components';


const Hero = () => {
    return (
        <div class='hero'>
            <Container>
                <InnerWrapper>
                    <Title>Hi! My name is <span>Fabian Nwaoha</span>
                        <br />
                        I am a <span>Junior Developer</span>
                    </Title>
                    <NiceButton onClick={() => {
                        const anchor = document.querySelector('#about')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}>Learn More</NiceButton>

                </InnerWrapper>


            </Container>
        </div>
    );
}

const Container = styled.div`
    min-height: 100vh;
    height: 100vh;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    flex-wrap:wrap;
    
`
const InnerWrapper = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
    flex-wrap:wrap;
    

`

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    color:#7b7fda;
    text-align: center;
    margin-bottom:2.5rem;;
    span{
        color: #3CB371;
    }
  
    @media(max-width:768px){
        font-size:2rem;
    }

    @media(max-width:992px){
        font-size:3rem;
    }
    
`

const NiceButton = styled.a`
    background-color: #7b7fda;
    color:white;
    border: 1px solid #7b7fda;
    border-radius: 10px;
    display:inline-block;
    padding: 15px 35px;
    text-decoration: none;
    
    transition: background-color 200ms ease-in-out;
    font-weight:700;
    margin-bottom:7rem;

    cursor:pointer;

    &:hover{
        background-color: #3CB371;
        color:white;
    }


`

export default Hero