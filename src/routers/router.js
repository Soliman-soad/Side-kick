import AddServices from "../pages/AddServices";
import ErrorPage from "../pages/errors/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ServiceDetails from "../pages/ServiceDetails";
import Services from "../pages/Services";
import PrivateRouter from "./PrivateRouter";

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
                element:<PrivateRouter><Profile/></PrivateRouter>
            },
            {
                path:'services',
                element:<Services/>,
                loader: ()=> fetch('http://localhost:5000/allServices')
            },
            {
                path:'service/:id',
                element:<ServiceDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:'addService',
                element:<PrivateRouter><AddServices/></PrivateRouter>,
            },
            {
                path:'myReview',
                element:<PrivateRouter><MyReviews/></PrivateRouter>,
                loader: ()=> fetch('http://localhost:5000/allServices')
            }
        ]
    }
])