import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Account from "../../pages/Account/Account";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDitails from "../../pages/CourseDitails/CourseDitails";
import Courses from "../../pages/Courses/Courses";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Register from "../../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/coursedetails',
                element:<CourseDitails></CourseDitails>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/account',
                element:<Account></Account>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/checkout',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            }
        ]
    }

])
