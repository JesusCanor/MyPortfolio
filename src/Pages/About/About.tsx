import { CardActions, Typography } from '@mui/material';
import React from 'react';
import { SectionContent } from '../index';
import { AboutStyled, CardContentStyled, CardMediaStyled, CardStyled, PDFButton } from './AboutStyled';
import image from '../../assets/images/retrato.jpg'
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import { useTheme } from '@mui/material';

export interface AboutInterface { title: string, dark: boolean, id: string }

const About : React.FC<AboutInterface> = ({ title, dark, id }) => {
	const theme = useTheme();

	return (
		<AboutStyled dark={dark}>
			<SectionContent id={id}>
				<Typography variant="h3">{title}</Typography>
				<CardStyled>
					{/* <CardMediaStyled title="picture" image={image}/> */}
					<CardContentStyled>
						<TypeWriterEffect 
							text="Buenas! Soy Jesús Cano y es un test"
							textStyle={{fontSize: "2rem", fontWeight: "700px", color: theme.palette.primary.main}}
							startDelay={250}
							cursorColor={theme.palette.primary.main}
							typeSpeed={50}/>

						<TypeWriterEffect 
							text="Desarrollador Fullstack especializado en Java con Spring y ReactJS."
							textStyle={{fontSize: "1.2rem", fontWeight: "500px"}}
							startDelay={2500}
							cursorColor="black"
							typeSpeed={50}/>
						<Typography variant="h6" color="black">
							Soy una mente inquieta con ganas de aprender y seguir creciendo. En todos estos años de desarrollador, he podido aprender y trabajar en
							diferentes equipos de diferentes tamaños, y de diferentes disciplinas.
							Actualmente estoy formándome en como aplicar correctamente la arquitectura hexagonal en Frontend y Backend
						</Typography>
					</CardContentStyled>
					<CardActions>
						<PDFButton variant="contained">
							<a href="http://google.com" download>
								Download CV
							</a>
						</PDFButton>
					</CardActions>
				</CardStyled>
			</SectionContent>
		</AboutStyled>)
};


export default About;
