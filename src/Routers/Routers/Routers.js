import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Account from "../../pages/Account/Account";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDitails from "../../pages/CourseDitails/CourseDitails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
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
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:() => fetch('http://localhost:5000/allCourses'),
            },
            {
                path:'/coursedetails/:id',
                element:<CourseDitails></CourseDitails>,
                loader:({params}) =>{
                    return fetch(`http://localhost:5000/course/${params.id}`)
                  },
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
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
            }
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }

])
