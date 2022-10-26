import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../others/ErrorPage";
import Blog from "../pages/Blog";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";


export const router = createBrowserRouter([
    {
        path: '/',
        element:<Root></Root>,
        errorElement : <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/home',
                element:<Home/>
            },
            {
                path: '/courses',
                element:<Courses/>,
                loader: () => fetch('https://it-learner-server-ifazzzz.vercel.app/courses')
            },
            {
                path: '/blog',
                element:<Blog/>
            },
            {
                path: '/faq',
                element:<FAQ/>
            },
            {
                path: '/login',
                element:<Login/>
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/details',
                element:<CourseDetails/>
            }
          
        ]
    }
])