import { lazy, Suspense, useState, useEffect } from "react";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "common/Navbar/Navbar";
import Landing from "pages/Landing/Landing";
const Product = lazy(() => import("pages/Product/Product"));

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div >
//       <Navbar />
//       <Product />
//     </div>,
//   },
// ]);
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleLoadComplete = () => {
      setIsLoading(false);
    };
    window.addEventListener('load', handleLoadComplete);
    return () => window.removeEventListener('load', handleLoadComplete);
  }, []);
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {isLoading && <Landing />}
      {!isLoading && <>
        <Navbar />
        <Product />
      </>}
    </Suspense>

  );
}

export default App;


