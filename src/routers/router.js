import AddServices from "../pages/AddServices";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/errors/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyReviews from "../pages/MyReviews";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ReviewEdit from "../pages/ReviewEdit";
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
                loader: ()=> fetch('https://sidekick-server-soliman-soad.vercel.app/services')
            },
            {
                path:'profile',
                element:<PrivateRouter><Profile/></PrivateRouter>
            },
            {
                path:'services',
                element:<Services/>,
                loader: ()=> fetch('https://sidekick-server-soliman-soad.vercel.app/allServices')
            },
            {
                path:'service/:id',
                element:<ServiceDetails/>,
                loader: ({params}) => fetch(`https://sidekick-server-soliman-soad.vercel.app/service/${params.id}`)
            },
            {
                path:'addService',
                element:<PrivateRouter><AddServices/></PrivateRouter>,
            },
            {
                path:'myReview',
                element:<PrivateRouter><MyReviews/></PrivateRouter>,
                loader: ()=> fetch('https://sidekick-server-soliman-soad.vercel.app/allServices')
            },
            {
                path:'review/:id',
                element:<ReviewEdit/>,
                loader: ({params}) => fetch(`https://sidekick-server-soliman-soad.vercel.app/review/${params.id}`)
            },
            {
                path:'blog',
                element:<Blog/>
            }
        ]
    }
])