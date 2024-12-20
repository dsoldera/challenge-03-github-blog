import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubProvider } from './contexts/GithubContext'
import { queryClient } from './lib/queryClient'
import { GlobalStylesBlog } from './theme/global'
import { defaultTheme } from './theme/theme'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStylesBlog />
        <GithubProvider>
          <HelmetProvider>
            <Helmet titleTemplate="%s | Github Blog React" />
            <Outlet />
          </HelmetProvider>
        </GithubProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
