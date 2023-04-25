import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { SectionContent } from '..';
import { skillsData } from '../../assets/MemoryData/skillsData';
import { SkillsInterface } from '../../DDD/domain';
import { TechnologyCard } from '../../components/TechnologyCard';

export interface SkillsProps { title: string, dark: boolean, id: string }

const Skills : React.FC<SkillsProps> = ({ title, dark, id }) => {
	return (
			<SkillsStyle dark={dark}>
				<SectionContent id={id}>
					<Typography variant="h3">{title}</Typography>
					+8 years of experience
					<Grid container>
						{ skillsData.map((data: SkillsInterface, index) => {
								return (
									<Grid item key={index} xs={12} sm={6} md={4}>
										<TechnologyCard/>
										{ <CardSkillsStyle>
											<CardMedia style={{'height': '5rem', 'width': '5rem', 'margin': '1rem', }} title={data.Title} image={data.ImageSrc}/>
											<h1>{data.Title}</h1>
											<p>{data.Description}</p>
										</CardSkillsStyle> }
									</Grid>
								)
							})
						}
					</Grid>
				</SectionContent>
			</SkillsStyle>
			)
};



interface SkillsStyledProps {
    dark: boolean;
}

export const SkillsStyle = styled.div<SkillsStyledProps>`
	min-height: 100vh;
	background: ${props => props.dark ? '#333' : '#FFF' };
	color: ${props => props.dark ? '#FFF' : '#333' };
`;

export const CardSkillsStyle = styled(Card)`
	margin: 2rem;
	border-radius: 10rem;
	min-height: 15vh;
	min-width: 15vw;
`;


export default Skills;
