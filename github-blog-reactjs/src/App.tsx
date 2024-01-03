import { Outlet } from "react-router-dom";
import { queryClient } from "./queryClient";
import { QueryClientProvider } from '@tanstack/react-query';

function App() {

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
    </>
  )
}

export default App
