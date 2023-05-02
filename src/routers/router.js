import React from "react";
import AddServices from "../pages/AddServices";
import Blog from "../pages/Blog";
import ErrorPage from "../pages/errors/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReviewEdit from "../pages/ReviewEdit";
import PrivateRouter from "./PrivateRouter";
import Loader from "../pages/shared/Loader";
const LazyHome = React.lazy(()=>import("../pages/Home"));
const LazyReviews = React.lazy(()=>import("../pages/MyReviews"));
const LazyProfile = React.lazy(()=>import("../pages/Profile"));
const LazyServiceDetails = React.lazy(()=>import("../pages/ServiceDetails"));
const LazyService = React.lazy(()=>import("../pages/Services"));
const LazyMain =React.lazy(()=>import("../layout/Main"))

const { createBrowserRouter } = require("react-router-dom");

export const router = createBrowserRouter([
    {
        path:"/",
        element:<React.Suspense fallback={Loader}><LazyMain/></React.Suspense>,
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
                element:<React.Suspense fallback={Loader}><LazyHome/></React.Suspense>,
                loader: ()=> fetch('https://sidekick-server-soliman-soad.vercel.app/services')
            },
            {
                path:'profile',
                element:<PrivateRouter><React.Suspense fallback={Loader}><LazyProfile/></React.Suspense></PrivateRouter>
            },
            {
                path:'services',
                element:<React.Suspense fallback={Loader}><LazyService/></React.Suspense>,
                loader: ()=> fetch('https://sidekick-server-soliman-soad.vercel.app/allServices')
            },
            {
                path:'service/:id',
                element:<React.Suspense fallback={Loader}><LazyServiceDetails/></React.Suspense>,
                loader: ({params}) => fetch(`https://sidekick-server-soliman-soad.vercel.app/service/${params.id}`)
            },
            {
                path:'addService',
                element:<PrivateRouter><AddServices/></PrivateRouter>,
            },
            {
                path:'myReview',
                element:<PrivateRouter><React.Suspense fallback={Loader}><LazyReviews/></React.Suspense></PrivateRouter>,
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