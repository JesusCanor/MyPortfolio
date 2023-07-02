import { Card, Grid, ListItem, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { SectionContent } from '..';
import { skillsData } from '../../assets/MemoryData/skillsData';
import { SkillsInterface } from '../../DDD/domain';
import { TechnologyCard } from '../../components/TechnologyCard';
import CountUp from 'react-countup';
import { TechnologyBasicCard } from '../../components/TechnologyBasicCard';

import aws from '../../assets/images/aws.png'
import spring from '../../assets/icons/spring.svg';
import django from '../../assets/icons/django.svg';
import docker from '../../assets/images/docker.png';
import react from '../../assets/images/react.png';
import python from '../../assets/icons/python.svg';
import java from '../../assets/images/java.png';
import angular from '../../assets/images/angular js.png';
import javascript from '../../assets/images/javascript.png';
import cobol from '../../assets/images/cobol.png';
import db2 from '../../assets/images/db2.png';
import mongodb from '../../assets/images/mongodb.png';
import postgresql from '../../assets/images/postgresql.png';

export interface SkillsProps { title: string, dark: boolean, id: string }

const Skills : React.FC<SkillsProps> = ({ title, dark, id }) => {

	const selectIcon = (name: string) => {
		return name.toLocaleLowerCase().includes('spring') ? spring :
				name.toLocaleLowerCase().includes('react') ? react :
				name.toLocaleLowerCase().includes('docker') ? docker :
				name.toLocaleLowerCase().includes('django') ? django :
				name.toLocaleLowerCase().includes('python') ? python :
				name.toLocaleLowerCase().includes('aws') ? aws :
				name.toLocaleLowerCase().includes('javascript') ? javascript :
				name.toLocaleLowerCase().includes('java') ? java :
				name.toLocaleLowerCase().includes('angular') ? angular :
				name.toLocaleLowerCase().includes('cobol') ? cobol :
				name.toLocaleLowerCase().includes('db2') ? db2 :
				name.toLocaleLowerCase().includes('sql') ? postgresql :
				name.toLocaleLowerCase().includes('mongodb') ? mongodb :
				undefined;
	}

	return (
			<SkillsStyle dark={dark}>
				<SectionContent id={id}>
					<Typography variant="h3">{title}</Typography>
					<p>+ <CountUp start={0} end={8} duration={3} style={{color: '#00abff', fontWeight: 'bold', fontSize: '2rem'}}/> años de experiencia relacionados con proyectos software </p>
						<Grid item container gap={10} xs={12} md={12} xl={12} justifyContent={"center"} paddingTop={"3rem"} paddingBottom={"3rem"}>
							{ skillsData.map((data: SkillsInterface, index) => 
								<TechnologyBasicCard
									key={index}
									icon={selectIcon(data.Title)}
									color={data.color}
									name={data.Title}
									description={data.Description}
									time={data.ExperienceTime} />
							)}
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
	min-height: 350px;
	min-width: 300px;
`;


export default Skills;