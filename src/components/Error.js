import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-page">
      <h2>Oops! Something went wrong</h2>
      <h3>
        {error.status}: {error.statusText}
      </h3>
      <p>{error.error.message}</p>
    </div>
  );
};

export default Error;
