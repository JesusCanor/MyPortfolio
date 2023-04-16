import styled from '@emotion/styled';
import { useState } from 'react'
import { ThemeProvider } from 'styled-components';
import './App.css'
import { darkTheme as darktheme, lightTheme as lighttheme, theme} from './Styles';
import { About } from './Pages';
import { Contact } from './Pages';
import { Navbar } from './Pages';
import { RoadMap } from './Pages';
import { Skills } from './Pages';
import GlobalStyle from './Styles/GlobalStyle';

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const themeToggler = () => darkTheme == false ? setDarkTheme(true) : setDarkTheme(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={darkTheme ? darktheme : lighttheme}/>
        <Navbar/>
        <About title="About me" dark={true} id="about" />
        <RoadMap title="RoadMap" dark={false} id="work"/>
        <Skills title="Skills" dark={true} id="skills" />
        <Contact title="Contact" dark={false} id="contact" />
    </ThemeProvider>
  )
}


export default App
