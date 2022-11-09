import ErrorPage from "../pages/errors/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import Services from "../pages/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

export const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'login',
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            },
            {
                path:'/',
                element:<Home/>,
                loader: ()=> fetch('http://localhost:5000/services')
            },
            {
                path:'profile',
                element:<Profile/>
            },
            {
                path:'services',
                element:<Services/>,
                loader: ()=> fetch('http://localhost:5000/allServices')
            }
        ]
    }
])