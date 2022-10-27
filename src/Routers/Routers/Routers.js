import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Account from "../../pages/Account/Account";
import Blog from "../../pages/Blog/Blog";
import Check from "../../pages/Check/Check";
import CheckOut from "../../pages/CheckOut/CheckOut";
import CourseDitails from "../../pages/CourseDitails/CourseDitails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Faq from "../../pages/Faq/Faq";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
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
                loader:() => fetch('https://educare-server3.vercel.app/allCourses'),
            },
            {
                path:'/coursedetails/:id',
                element:<CourseDitails></CourseDitails>,
                loader:({params}) =>{
                    return fetch(`https://educare-server3.vercel.app/course/${params.id}`)
                  },
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
                loader:({params}) =>{
                    return fetch(`https://educare-server3.vercel.app/course/${params.id}`)
                  },
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
                path:'/profile',
                element:<Profile></Profile>
            },
            {
                path:'/check',
                element:<Check></Check>
            }
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }

])
