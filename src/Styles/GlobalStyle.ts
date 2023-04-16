import styled, { createGlobalStyle} from "styled-components"

export interface DefaultTheme { body: string; text: string;}

export const GlobalStyles = createGlobalStyle<{theme: DefaultTheme}>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `

  export default GlobalStyles;

const SectionContent = styled.div `
  max-width: 80vw;
  margin: 0 auto;
  padding: 3rem;
  user-select:none;
`

export { SectionContent };