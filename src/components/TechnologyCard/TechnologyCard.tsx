import React from 'react';
import styled from 'styled-components';
export interface TechnologyCardProps {}

const TechnologyCard : React.FC<TechnologyCardProps> = () => {
	return  <WrapperCard>
				<FrontFace>
						<Cover>
							<Profile src='https://t3.ftcdn.net/jpg/00/92/53/56/240_F_92535664_IvFsQeHjBzfE6sD4VHdO8u5OHUSc6yHF.jpg'></Profile>
						</Cover>
					<Name>Peter</Name>
					<Tag>Fucking megacrack</Tag>
					<p>This is a fucking example text</p>
				</FrontFace>
				<BackFace>
					<h1>Job Description</h1>
					<p>Lorem ipsum de fucking example text</p>
				</BackFace>
			</WrapperCard>;
};

const FrontFace = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #ebf8f9;
	border-radius: 5px;
	backface-visibility: hidden;
	box-shadow: 0 2px 3px rgba(0,0,0,.2);
	transition: transform .4s linear;
	background-color: rgba(128,128,128,0.85);
	transform: perspective(800px) rotateY(0deg);
`

const BackFace = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: #ebf8f9;
	border-radius: 5px;
	backface-visibility: hidden;
	box-shadow: 0 2px 3px rgba(0,0,0,.2);
	transition: transform .4s linear;
	transform: perspective(800px) rotateY(-180deg);
	background-color: rgba(128,128,128,0.85);
`

const WrapperCard = styled.div`
	transition: all 0.2s;
	position: relative;
	transform: translate(-50%, -50%);
	height: 25rem;
	width: 20rem;
	text-align: center;
	border-radius: 5px;

	&:hover > ${BackFace}{
		transform: perspective(800px) rotateY(0deg);
	}

	&:hover > ${FrontFace} {
		transform: perspective(800px) rotateY(180deg);
	}

`

const Cover = styled.div`
	background: linear-gradient(75deg, #8e44ad, #2980b9);
	height: 115px;
	width: 100%;
	border-radius:5px 5px 0 0;`

const Profile = styled.img`
	height: 115px;
	width: 115px;
	border-radius: 50%;
	padding: 5px;
	background: white;
	margin-top: 1.5rem;
`

const Name = styled.h1`
	font-size: 30px;
	padding-top: 75px;
`

const Tag = styled.div`
	padding: 5px 0;
`

const About = styled.div`
	margin-top: 10px;
	padding: 0px 35px;
	text-align: justify;
	font-size: 15px;
`




export default TechnologyCard;
