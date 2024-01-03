import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <h1>Oops!</h1>
      <p>Desculpe, um erro inesperado ocorreu.</p>
    </>
  )
}