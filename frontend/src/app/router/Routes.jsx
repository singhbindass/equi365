// app/routes.tsx
import { createBrowserRouter } from "react-router-dom";

import Home from "../../features/core/home";
import Action from "../../features/core/Action";
import Layout from "../Layout";
import Help from "../../features/core/help";


export const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/amenities", element: <Action /> },
    { path: "/help", element: <Help /> }
];
/*
export const Routers = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/amenities", element: <Action /> },
    ],
  },


  
]);*/
