import { createGlobalStyle } from 'styled-components'

export const GlobalStylesBlog = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: ${({ theme }) => theme.colors.baseBackground};
    color: ${({theme}) => theme.colors.baseText};
    font-family: "Nunito", sans-serif;
    line-height: 160%;
    font-weight: normal;
  }
`
