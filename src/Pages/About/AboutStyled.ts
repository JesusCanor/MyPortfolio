import { Button, Card, CardContent, CardMedia } from '@mui/material';
import styled from 'styled-components';

interface AboutStyledProps {
    dark: boolean;
}

export const AboutStyled = styled.div<AboutStyledProps>`    
    min-height: 100vh;
    background: ${props => props.dark ? '#333' : '#FFF' };
    color: ${props => props.dark ? '#FFF' : '#333' };
`;

const CardStyled = styled(Card) `
    height: 70vh;
    display: flex;
    margin-top: 5vh;//TODO theme.spaceing(6)
    position: relative; //TODO TOUNDERSTAND
`

const CardMediaStyled = styled(CardMedia)`
    width: 450px;
    height: auto;
    objectFit: cover;
    border-radius: 20px;
    margin: 3vh; //TODO TOUNDERSTAND theme.spacing(6);
`

const CardContentStyled = styled(CardContent) `
    margin-top: 1.5rem; //theme.spacing(2); //TODO
    max-width: 47vw;
    & h6 {
        margin-top: 1.5rem; //theme.spacing(2); //TODO TOUNDERSTAND
        ${props => props.theme.breakpoints.down("sm")} {
            display: none;
        }
    }
`

const PDFButton = styled(Button) `
    position: absolute !important;
    right: 17rem;
    bottom: 10rem;

    ${props => props.theme.breakpoints.down("sm")} {
        right: 4rem;
        bottom: 5rem;
    }

    background-color: ${props => props.theme.palette.primary.main} !important;
    padding: 1.5rem !important; //theme.spacing(3)
    
    & a { 
        color: white !important; 
        text-decoration: none !important;
    }

    &:hover {
        background-color: white !important;
        & a { color: ${props => props.theme.palette.primary.main} !important; }

    }
`

export { CardStyled, CardMediaStyled, CardContentStyled, PDFButton };