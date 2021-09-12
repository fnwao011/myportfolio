import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo> FNWAOHA <span>{'/>'}</span> </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </Hamburger>
            <Menu isOpen={isOpen}>

                <MenuLink onClick={() => {
                    const anchor = document.querySelector('#about')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }}>About Me</MenuLink>
                <MenuLink onClick={() => {
                    const anchor = document.querySelector('#projects')
                    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}>Projects</MenuLink>

            </Menu>
        </Nav>
    );
}

const Nav = styled.div`
    padding:0 2rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    flex-wrap:wrap;
    background:white;
 
    

`
const Logo = styled.a`
    padding: 1rem 0;
     text-decoration:none;
     font-weight:500;
    color:#7b7fda;

    span{
        font-weight:700;
        color:#3CB371;
        font-size:1.3rem;
    }

`
const Hamburger = styled.div`
    display:none;
    flex-direction:column;
    cursor:pointer;

    span{
        height:2px;
        width:25px;
        background:#7b7fda;
        margin-bottom: 4px;
        border-radius:5px;
    }

    @media(max-width:768px){
        display:flex
    }

`
const Menu = styled.div`
display:flex;
justify-content: space-between;
position:relative;
align-items: center;

@media(max-width:768px){
    overflow:hidden;
    flex-direction:column;
    width:100%;
    max-height: ${({ isOpen }) => isOpen ? "300px" : "0"};
    transition:max-height 0.3s ease-in;
    
}

`
const MenuLink = styled.a`
    padding: 1rem 3rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    //font-weight: 500;
    font-size:0.9 rem;
    color:#3CB371;
    transition:all 0.3 ease-in;

    &:hover{
        color:#7b7fda
    }

`

export default Navbar