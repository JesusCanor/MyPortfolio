import { MenuItem, Select, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionContent } from '..';
import { useFormik } from "formik";
import * as Yup from "yup";

export interface ContactInterface { title: string, dark: boolean, id: string }

const Contact : React.FC<ContactInterface> = ({title, dark, id}) => {
	const [motivo, setMotivo] = useState(4);

	const {errors, touched, handleSubmit, handleBlur, handleChange} = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: ""
		},
		validationSchema: Yup.object({
			name: Yup.string().min(3, 'Mínimo 3 carácteres').required('Nombre requerido'),
			email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email incorrecto").required('Email requerido'),
			message: Yup.string().min(15, 'Mínimo 15 carácteres').required('Mensaje requerido')
		}),
		onSubmit: values => {

		}
	})

	return (
			<ContactStyle dark={dark}>
				<SectionContent id={id}>
					<Typography variant="h3">{title}</Typography>
					<FormStyled onSubmit={handleSubmit}>
						<h1 style={{padding: '.5rem'}}>Hablemos :D</h1>
						<TextField id="outlined-basic" label="Tú nombre completo" variant="outlined" name="name" 
									onChange={handleChange('name')} onBlur={handleBlur}
									error={touched.name && !!errors.name} helperText={touched.name && errors.name}/>
						<TextField id="outlined-basic" label="Tú email" variant="outlined" name="email" 
									onChange={handleChange('email')} onBlur={handleBlur}
									error={touched.email && !!errors.email} helperText={touched.email && errors.email}/>
						<Select
								labelId="simple-select-label"
								id="simple-select"
								label="Motivo del contacto"
								name="type"
								value={motivo}
								onChange={handleChange('motivo')}
							>
								<MenuItem value={1}>Oferta laboral</MenuItem>
								<MenuItem value={2}>Desarrollo personalizado</MenuItem>
								<MenuItem value={3}>Consultoria</MenuItem>
								<MenuItem value={4}>Saludar</MenuItem>
						</Select>
						<TextField 
							id="outlined-multiline"
							label="Mensaje"
							multiline
							rows={5}
							name="message"
							onBlur={handleBlur}
							onChange={handleChange('message')}  error={touched.message && !!errors.message} helperText={ touched.message &&errors.message}
						/>
						<Button disabled={(!!errors.email || !!errors.name || !!errors.message) || Object.keys(touched).length == 0} variant='contained'>Enviar</Button>
					</FormStyled>
				</SectionContent>
			</ContactStyle>
			)
};


interface ContactStyledProps {
    dark: boolean;
}

export const FormStyled = styled.form`
	max-width: 20vw;
	min-width: 15rem;
	border-radius: 15px;
	background-color: #f1f1f1;
	padding: 3.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	box-shadow: 0 3px 0 #ddd;
	margin-top: 5rem;

`
export const ContactStyle = styled.div<ContactStyledProps>`
	min-height: 100vh;
	background: ${props => props.dark ? '#333' : '#FFF' };
	color: ${props => props.dark ? '#FFF' : '#333' };
	text-align: -webkit-center;
`

export default Contact;