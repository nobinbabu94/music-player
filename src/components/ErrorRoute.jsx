import { useRouteError } from "react-router-dom";

const ErrorRoute = () => {
    const error = useRouteError()

    console.log(error)
  return (
    <div  className="flex flex-col items-center justify-center h-[100vh] text-3xl font-extrabold">
       <h2>{error.status}</h2>
       <h2>{error.statusText}</h2>
    </div>
  )
};

export default ErrorRoute;
