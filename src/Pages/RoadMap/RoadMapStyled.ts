import styled from 'styled-components';
import { Chip } from '@mui/material';


const VerticalTimelineSectionTechnologies = styled.section `
    display: flex;
    gap: 1rem;
    justify-content: left;
    ${props => props.theme.breakpoints.down("sm")} {
        justify-content: center;
    }
    padding-bottom: 1vw;
    user-select: none;
`

const ChipStyled = styled(Chip) `
    transition: all .2s !important;
    &:hover {
        transform: scale(1.1);
    }
`   

const VerticalTimeLineTitle = styled.h2 `
    text-align: left;
`

const VerticalTimeLineSubTitle = styled.h3 `
    text-align: center;
`

const VerticalTimeLineContent = styled.div `
    text-align: left;
`


export { VerticalTimelineSectionTechnologies,
         VerticalTimeLineTitle,
         VerticalTimeLineSubTitle,
         VerticalTimeLineContent, 
         ChipStyled };