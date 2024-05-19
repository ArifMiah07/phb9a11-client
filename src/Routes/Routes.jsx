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
import CoursesDetails from "../Pages/Home/Categorys/CoursesDetails";
import SearchPage from "../Pages/Search/SearchPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import ManageService from "../Pages/ManageService/ManageService";
import BookedServices from "../Pages/BookedServices/BookedServices";
import ServiceToDo from "../Pages/ServiceToDo/ServiceToDo";
import AllServices from "../Pages/AllServices/AllServices";
import PrivateRoute from "./PrivateRoute";
import SingleService from "../Pages/SingleService/SingleService";
import SingleServicesPage from "../Components/SigleServicePage/SingleServicesPage";

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
          path: '/add-service',
          element: <PrivateRoute><AddService></AddService></PrivateRoute>
        },
        {
          path: '/manage-service',
          element: <PrivateRoute><ManageService></ManageService></PrivateRoute>
        },
        {
          path: '/booked-services',
          element: <PrivateRoute> <BookedServices></BookedServices></PrivateRoute>
        },
        {
          path: '/service-to-do',
          element: <PrivateRoute><ServiceToDo></ServiceToDo></PrivateRoute>
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
          path: '/course-details',
          element: <CoursesDetails></CoursesDetails>
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
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
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
          path: '/all-services',
          element:<PrivateRoute><AllServices></AllServices></PrivateRoute>
        },
        {
          path: '/single-service/:id',
          element: <SingleService></SingleService>,
          loader: ()=> fetch('http://localhost:5000/category')
        },
        {
          path: '/search',
          element: <SearchPage></SearchPage>
        },
        {
          path: '/:heading1/:sl',
          element: <SingleServicesPage />,
          loader: () => fetch('http://localhost:5000/category')
        }        
      ]
    },
  ]);


  export default router;