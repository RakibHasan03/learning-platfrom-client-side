import Blog from "../../components/Blog/Blog";
import CheckOut from "../../components/CheckOut/CheckOut";
import Courses from "../../components/Courses/Courses";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import ErrorElement from "../../components/ErrorElements/ErrorElement";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element:<Home></Home>
        },
            {
                path: '/home',
                element:<Home></Home>
        },
            {
                path: '/courses',
                loader: () => fetch('https://learn-with-rakib-server-mrmerndeveloper.vercel.app/courses'),
                element:<Courses></Courses>
            },
            {
                path: "/course/:id",
                loader: ({ params }) => {
                    return fetch(`https://learn-with-rakib-server-mrmerndeveloper.vercel.app/courses/${params.id}`)
                },
                element: <DetailsPage></DetailsPage>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
            {
                path: '/faq',
                element:<Faq></Faq>
            }
        ]
        
    }

])