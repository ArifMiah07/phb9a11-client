import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import CategoryCardDetails from "../Pages/Home/Categorys/CategoryCardDetails";
import PopularClasses from "../Pages/Home/PopularClasses/PopularClasses";
import AddService from "../Pages/AddService/AddService";
import About from "../Pages/Home/About/About";
import ClassesDetails from "../Pages/Home/FindClasses/ClassesDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/classes-details',
          element: <ClassesDetails></ClassesDetails>
        },
        {
          path: '/category/:id',
          element: <CategoryCardDetails></CategoryCardDetails>,
          loader: ()=> fetch('http://localhost:5000/category')
        },
        {
          path: '/popular-classes',
          element: <PopularClasses></PopularClasses>,
          loader: ()=> fetch('http://localhost:5000/category')
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/add-services',
          element: <AddService></AddService>
        }
      ]
    },
  ]);


  export default router;