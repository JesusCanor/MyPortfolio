import React, { useState } from 'react';
import CancelIcon from "@mui/icons-material/Cancel"
import { ImgLogoStyled, AppBarStyled, ToolbarStyled, ListStyled, IconButtonStyled, LinkSidebarStyled, CancelIconButtonStyled} from './NavbarStyled';
import { Link, animateScroll as scroll } from 'react-scroll';
import { InfoTwoTone, EmojiObjectsTwoTone, BuildTwoTone, ContactMailTwoTone } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, ListItem, ListItemIcon } from '@mui/material';

export interface NavbarInterface {}

const links = [ //TODO esto hay que sacarlo a un fichero externo, o a BBDD.
	{
		id: "about",
		text: "Sobre mi",
		icon: <InfoTwoTone fontSize="large"/>,
		color: "#00abff",
	},
	{
		id: "work",
		text: "RoadMap",
		icon: <BuildTwoTone fontSize="large"/>,
		color: "black",
	},
	{
		id: "skills",
		text: "Tecnologías",
		icon: <EmojiObjectsTwoTone fontSize="large"/>,
		color: "#FFC445",
	},
	{
		id: "contact",
		text: "Contacto",
		icon: <ContactMailTwoTone fontSize="large"/>,
		color: "#8b77de",
	},
];

const Navbar : React.FC<NavbarInterface> = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<AppBarStyled>
				<ToolbarStyled>
					<ImgLogoStyled src="https://obuu.es/wp-content/uploads/2019/12/obuu-logo-sm.png" alt="Logo"/>
					<ListStyled>
						{
							links.map(({id, text}, index) => (
								<Link key={index} 
									to={id}
									spy={true} 
									activeClass="active" 
									smooth={true} 
									duration={500} 
									offset={-70}>{text}</Link>
							))
						}
					</ListStyled>
					<IconButtonStyled edge ="end" onClick={()=> setOpen(true)}>
						<MenuIcon fontSize="large"/>
					</IconButtonStyled>
				</ToolbarStyled>
			</AppBarStyled>

			<Drawer anchor="right" open={open} onClose={()=> setOpen(false)}>
				<CancelIconButtonStyled onClick={()=>setOpen(false)}>
					<CancelIcon fontSize="large"/>
				</CancelIconButtonStyled>
				<Divider/>
				{
					links.map(({id, text, icon, color}, index) => (
						<LinkSidebarStyled
							key={index}
							to={id}
							spy={true} 
							activeClass="active" 
							smooth={true} 
							duration={500} 
							offset={-70}
							color={color}>
							<ListItem component="h4">
								<span>
									<ListItemIcon>
										{icon}
									</ListItemIcon>
								</span>{text}
							</ListItem>
						</LinkSidebarStyled>
					))
				}
			</Drawer>
		</>
		)
};

export default Navbar;