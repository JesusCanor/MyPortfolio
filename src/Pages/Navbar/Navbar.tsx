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
		text: "About me",
		icon: <InfoTwoTone fontSize="large"/>
	},
	{
		id: "work",
		text: "My Work",
		icon: <BuildTwoTone fontSize="large"/>
	},
	{
		id: "skills",
		text: "Skills",
		icon: <EmojiObjectsTwoTone fontSize="large"/>
	},
	{
		id: "contact",
		text: "Get in touch",
		icon: <ContactMailTwoTone fontSize="large"/>
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
					links.map(({id, text, icon}, index) => (
						<LinkSidebarStyled key={index}
							to={id}
							spy={true} 
							activeClass="active" 
							smooth={true} 
							duration={500} 
							offset={-70}>
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