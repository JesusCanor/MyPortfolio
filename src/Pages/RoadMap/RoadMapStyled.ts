import styled from 'styled-components';
import { Chip } from '@mui/material';


const VerticalTimelineSectionTechnologies = styled.section `
    overflow-x: auto;
    
    box-sizing: border-box;
    display: flex;
    gap: 1rem;

    margin-bottom: .5vw;
    margin-top: .5vw;
    padding: .5vh 0 .5vh 0;
    user-select: none;

    padding: 1rem;
        
    &::-webkit-scrollbar-thumb {
        background-color: #9fa9bd;
        border-radius: 5px;
        transition: all 5s;
        
        &:hover {
            background-color: gray;
        }
    }

    &::-webkit-scrollbar {
        height: .2rem;
        border-radius: 5px;
    }


`

const ChipStyled = styled(Chip) `
    padding: .1rem;
    transition: all .2s !important;
    &:hover {
        transform: scale(1.1);
    }
`   

const VerticalTimeLineTitle = styled.h2 `
    text-align: left;
`

const VerticalTimeLineSubTitle = styled.h3 `
    text-align: left;
`

const VerticalTimeLineContent = styled.div `
    padding-left: 2rem;
    text-align: left;
`


export { VerticalTimelineSectionTechnologies,
         VerticalTimeLineTitle,
         VerticalTimeLineSubTitle,
         VerticalTimeLineContent, 
         ChipStyled };