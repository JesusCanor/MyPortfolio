import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { SectionContent } from '..';
export interface ContactInterface { title: string, dark: boolean, id: string }

const Contact : React.FC<ContactInterface> = ({title, dark, id}) => {
	return (
			<ContactStyle dark={dark}>
				<SectionContent id={id}>
					<Typography variant="h3">{title}</Typography>
				</SectionContent>
			</ContactStyle>
			)
};


interface ContactStyledProps {
    dark: boolean;
}

export const ContactStyle = styled.div<ContactStyledProps>`
	min-height: 100vh;
	background: ${props => props.dark ? '#333' : '#FFF' };
	color: ${props => props.dark ? '#FFF' : '#333' };`


export default Contact;
