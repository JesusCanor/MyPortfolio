import React from 'react';
import styled from 'styled-components';

export type TechnologyBasicCardProps = {
	name: string,
	description: string,
	color: string,
	icon: any,
	time: number
}

const TechnologyBasicCard: React.FC<TechnologyBasicCardProps> = (props) => {
	return <WrapperCard>
				<FrontFace>
					<Cover color={props.color}>
						<Image src={props.icon} />
					</Cover>
						<Name>{props.name}</Name>
						<Description dangerouslySetInnerHTML={{ __html: props.description}} />
						<Description><b style={{fontSize: '20px'}}>{props.time}</b> {props.time > 1 ? 'años' : 'año'} de experiencia</Description>
				</FrontFace>
			</WrapperCard>;
};

const Image = styled.img`
	min-height: 115px;
	min-width: 115px;
	width: 6vw;
	height: 6vh;
	border-radius: 50%;
	padding: 5px;
	background: white;
	margin-top: 1.5rem;

	transition: 0.3s;
	box-shadow: rgba(0, 0, 0, .25) 0px 10px 50px;
`

export const WrapperCard = styled.section`
	transition: .3s;
	height: 30vh;
	width: 15vw;
	min-width: 300px;
	min-height: 350px;
	text-align: center;

	&:hover {
		transform: scale(1.01);
		box-shadow: 0 20px 30px -10px rgba(255,255,255,.2);
		border-radius: 10px;
		${Image} {
			transform: scale(1.05);
		}
	}
`;

export const FrontFace = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(128,128,128,0.85);
	box-shadow: 0 2px 3px rgba(0,0,0,.2);
	border-radius: 5px;
`

export const Cover = styled.div`
	background: linear-gradient(180deg, ${props => props.color}, ${props => props.color});
	height: 115px;
	width: 100%;
	border-radius: 5px 5px 0 0;	
`
const Name = styled.h1`
	font-size: 30px;
	padding-top: 75px;
`

const Description = styled.p`
	padding: 5px 0;
`

export default TechnologyBasicCard;
