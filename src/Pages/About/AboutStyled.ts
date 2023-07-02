import { Card, CardContent, CardMedia, Button } from '@mui/material';
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
    max-width: 65vw;
    margin: 5vh auto;
`

const CardMediaStyled = styled(CardMedia)`
    // width: 450px;
    height: auto;
    // objectFit: cover;
    border-radius: 20px;
    margin: 3vh; //TODO TOUNDERSTAND theme.spacing(6);
`

const CardContentStyled = styled(CardContent) ` 
    margin-top: 1.5rem; //theme.spacing(2); //TODO
    margin: 2rem;
    & h6 {
        margin-top: 1.5rem; //theme.spacing(2); //TODO TOUNDERSTAND
        ${props => props.theme.breakpoints.down("sm")} {
            display: none;
        }
    }
`

const PDFButton = styled(Button)` //Todo esto está
    padding: 1.5rem !important; //theme.spacing(3)
    margin: 3rem 0rem 2rem 0rem !important;

    ${props => props.theme.breakpoints.down("sm")} {
    }

    background-color: ${props => props.theme.palette.primary.main} !important;
    
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