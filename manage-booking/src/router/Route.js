// import { Route, Routes } from "react-router-dom";
// import Login from "../pages/login";
import BookingPage from "../pages/bookingfage/bookingPage";
import Specialist from "../pages/specialist/specialist.js";
const publicRoutes = [

    { path: "/specialist", component: Specialist },

    { path: "/booking/:id", component: BookingPage },

    // {
    //     path: "/specialist",
    //     component: () => import(/* webpackChunkName: "Specialist" */ "../pages/bookingfage/specialist/specialist.js"),
    //     // redirect: `${adminRoot}/piaf`,
    //   },
]
const praviteRoutes = [];
export {publicRoutes, praviteRoutes};
