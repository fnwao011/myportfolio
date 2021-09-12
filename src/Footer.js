import styled from "styled-components";

const Footer = () => {
    return (
        <Container>
            <SubTitle>FNWAOHA{'/>'}</SubTitle>
            <TextBody>fnwao011@uottawa.ca</TextBody>
            <hr />
            <TextBody>Thank You!</TextBody>
        </Container>
    );
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#3CB371;
    margin-top:7rem;
    -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 7rem 0 5rem 0;
  height:50%;

  hr{
    margin: 1rem auto;
    border: 0;
    width: 50%;
    border-top: 2px solid white;
  }
`
const SubTitle = styled.h3`
    font-size:1.1rem;
    color:white;
    text-align:center;
    
    
`
const TextBody = styled.p`
    font-size:0.9rem;
    color:white;
    margin-top:0;
    line-height:1;
    
`

export default Footer;