import { Helmet } from 'react-helmet-async'
import { useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <>
      <Helmet title="Error Page" />
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado ocorreu.</p>
    </>
  )
}
