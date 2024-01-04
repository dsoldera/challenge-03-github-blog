import { Outlet } from 'react-router-dom'
import { queryClient } from './queryClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <Helmet titleTemplate="%s | Github Blog React" />
          <Outlet />
        </HelmetProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
