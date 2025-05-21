// ./Pages/ErrorPage.jsx
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();
  console.error("Routing Error:", error); // ✅ Logs full error in the browser console

  return (
    <div className="text-center mt-10 text-red-600">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mt-4 italic">{error.statusText || error.message}</p>
    </div>
  );
}

export default ErrorPage;
