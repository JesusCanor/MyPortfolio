import { Link } from 'react-scroll';
import { IconButton, List, Toolbar } from '@mui/material';
import styled from 'styled-components';

const ImgLogoStyled = styled.img`
    height: 3rem;
    width: 3rem;
    objectFit: "contain";
    &:hover { cursor: pointer }
`

const AppBarStyled = styled.div ` //Instead Appbar because doesn't work. Replace Text in next component
    position: sticky;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`

const ToolbarStyled = styled(Toolbar) `
    background-color: white;
    display: flex;
    justify-content: flex-start;
    alignItems: center;
`

const IconButtonStyled = styled(IconButton) `

    ${props => props.theme.breakpoints.up("sm")} {
        display: none !important;
    }
`

 // margin-left : TODO ${theme.spacing(3)};
const ListStyled = styled(List) `
    & a {
        user-select: none;
        color: #333;
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 1.5rem;
    }

    & a:hover {
        cursor: pointer;
        color: ${props => props.theme.palette.primary.main};
        border-bottom: 3px solid ${props => props.theme.palette.primary.main};
    }

    ${props => props.theme.breakpoints.down("sm")} {
        display: none;
    }
`

const LinkSidebarStyled = styled(Link) `
    width: 30vw;
    ${props => props.theme.breakpoints.down("sm")} {
        width: 45vw;
    }

    & h4 { 
        margin: 10px 0px 0px 4px;
        fontWeight: bold;

        &:hover {
            cursor: pointer;
        }
     }
`

const CancelIconButtonStyled = styled(IconButton) `
     justify-content: right !important;

     & svg:hover { color: red;}
`

export { ImgLogoStyled, AppBarStyled, ToolbarStyled, ListStyled, IconButtonStyled, LinkSidebarStyled, CancelIconButtonStyled }