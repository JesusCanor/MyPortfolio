import { Avatar, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
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

import { SectionContent } from '..';
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { roadmapData } from '../../assets/MemoryData/roadmapData';
import { roadMapInterface } from '../../DDD/domain';
import { ChipStyled, VerticalTimeLineContent, VerticalTimeLineSubTitle, VerticalTimeLineTitle, VerticalTimelineSectionTechnologies } from './RoadMapStyled';

const styles = {
	backgroundColor: 'rgba(228, 228, 228, .5)',
	backgroundColorArrow: 'rgba(228, 228, 228, 1)',
	lineColor: 'rgba(228, 228, 228, 1)'
}


export interface RoadMapProps { title: string, dark: boolean, id: string }

const RoadMap : React.FC<RoadMapProps> = ({title, dark, id}) => {
	return ( 
			<RoadMapStyle dark={dark}>
				<SectionContent id={id}>
					<header style={{position: 'sticky'}}>
						<Typography variant="h3">{title} </Typography>
					</header>
					<section style={{overflowX: 'auto'}}>
						<VerticalTimeline lineColor={styles.lineColor}>
							 { roadmapData.map((data : roadMapInterface, index) => 
							 	{return (
									<VerticalTimelineElement key={data.CompanyName}
										contentStyle={{ background: index == 0 ? 'rgba(0, 171, 255, .2)'  : styles.backgroundColor, color: 'black', borderTop: '.2rem solid ' +data.borderTop }}
										contentArrowStyle={{ borderRight: '10px solid ' +styles.backgroundColorArrow }}
										date={ data.InitialDate.toLocaleString('default', { month: 'long'}) +" " +data.InitialDate.getFullYear().toString() 
											   +" - "
											   +data.FinalDate.toLocaleString('default', { month: 'long'}) +" " +data.FinalDate.getFullYear().toString() }
										dateClassName='roadmap-date-class'
										iconStyle={{ background: data.iconColor, boxShadow: '0 0 0 4px ' +data.boxShadowIconColor +',inset 0 2px 0 grey,0 3px 0 4px grey'
											// boxShadow: '0 0 0 4px ' +data.boxShadowIconColor +', inset 0 2px 0 ' +data.boxShadowIconColor +', 0 3px 0 4px' +data.boxShadowIconColor +' !important'
										}}
										//boxShadow: '0 0 0 4px ' +data.boxShadowIconColor +',inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)'

									>
										<VerticalTimelineSectionTechnologies>
											{ data.Technologies.map((technology) => {
																		const logo = technology.toLocaleLowerCase().includes('spring') ? spring :
																					 technology.toLocaleLowerCase().includes('react') ? react :
																					 technology.toLocaleLowerCase().includes('docker') ? docker :
																					 technology.toLocaleLowerCase().includes('django') ? django :
																					 technology.toLocaleLowerCase().includes('python') ? python :
																					 technology.toLocaleLowerCase().includes('aws') ? aws :
																					 technology.toLocaleLowerCase().includes('javascript') ? javascript :
																					 technology.toLocaleLowerCase().includes('java') ? java :
																					 technology.toLocaleLowerCase().includes('angular') ? angular :
																					 technology.toLocaleLowerCase().includes('cobol') ? cobol :
																					 technology.toLocaleLowerCase().includes('db2') ? db2 :
																					 undefined;

																		return <ChipStyled
																			size={'medium'}
																			label={technology}
																			avatar={<Avatar alt={`${technology}`} 
																						src={logo}
																					/>}
																			variant="outlined" />
																		}
												)
											}
										</VerticalTimelineSectionTechnologies>

										<VerticalTimeLineTitle>{data.Rol}</VerticalTimeLineTitle>
										<VerticalTimeLineSubTitle>{data.CompanyName}</VerticalTimeLineSubTitle>
										<VerticalTimeLineContent dangerouslySetInnerHTML={{ __html: data.Description }}/>
									</VerticalTimelineElement>
								); }
							)}
						</VerticalTimeline>
					</section>
				</SectionContent>
			</RoadMapStyle>
			)
};

interface RoadMapStyledProps {
    dark: boolean;
}

export const RoadMapStyle = styled.div<RoadMapStyledProps>`
	min-height: 100vh;
	background: ${props => props.dark ? '#333' : '#FFF' };
	color: ${props => props.dark ? '#FFF' : '#333' };
`;



export default RoadMap;
