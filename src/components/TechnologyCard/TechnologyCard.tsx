import React from 'react';
import styled from 'styled-components';
export interface TechnologyCardProps {}

const TechnologyCard : React.FC<TechnologyCardProps> = () => {
	return <WrapperCard>
				<SingleCard>
					<FrontCard></FrontCard>
					<BackCard>
						<ContentCard>
								<h2>Example</h2>
								<h4>Another Example</h4>
								<p>Un lorem ipsum to flaman que veremos que tal</p>
							<SocialsCard>
								<i>Icon1</i>
								<i>Icon2</i>
							</SocialsCard>
						</ContentCard>
					</BackCard>
				</SingleCard>
			</WrapperCard>;
};
export const CommonCard = styled.div `
	height: 450px;
	max-width: 300px;
	margin: auto;
	position: relative;
`;
export const CommonFrontBackCard = styled.div `
	width: 300px;
	position: relative;
	top: 0;
	left: 0;
	backface-visibility: hidden;
`;

export const SingleCard = styled(CommonCard)`
	text-align: center;
	transition: all 1.5s cubic-bezier(0.7, -.5, 0.3, 1.8);
	trasnform-style: preserve-3d;
`;


export const WrapperCard = styled(CommonCard)`
	perspective: 900px;

	&:hover ${SingleCard} {
		transform: rotateY(180deg);
	}
`;


export const FrontCard = styled(CommonFrontBackCard)`
	cursor: pointer;
	height: 100%;
	background-image: url('https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png?width=256&v=enabled&s=86f4a4bd647772d34d2de32a0e4281dd0ab095f1');
	backface-visibility:hidden;
	border-radius: 50px;
	background-size:cover;
	background-position: center center;
`;

export const BackCard = styled(CommonFrontBackCard)`
	transform: rotateY(180deg);
	position: absolute;
	border-radius: 50px;
	height: 450px;
	background: white;
`;

export const ContentCard = styled.div`
	padding-top: 25%

	& h2 {
		font-size: 35px;
		margin: 0;
		font-weight: 300;
	}

	& h4 {
		margin: 0;
	}
`;

export const SocialsCard = styled.p `
	margin-top: 20%;

	& i {
		font-size: 30px;
		margin: 0 10px;
	}
`;

export default TechnologyCard;
