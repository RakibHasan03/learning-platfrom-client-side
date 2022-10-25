import CheckOut from "../../components/CheckOut/CheckOut";
import Courses from "../../components/Courses/Courses";
import DetailsPage from "../../components/DetailsPage/DetailsPage";
import ErrorElement from "../../components/ErrorElements/ErrorElement";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import Main from "../../layout/Main";

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
                path: '/',
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
                element: <CheckOut></CheckOut>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            }
        ]
        
    }

])