// app/routes.tsx
import { createBrowserRouter } from "react-router-dom";

import Home from "../../features/core/home";
import Action from "../../features/core/Action";
import Layout from "../Layout";
import Help from "../../features/core/help";
import ContactUs from "../../features/core/ContactUs";
import AmenitiesPage from "../../features/amenities/components/AmenitiesPage";
import AdvancedMeetingRoomBooking from "../../features/AdvancedMeetingRoomBooking";
import AdvancedMeetingRoomBookingWithDayPass from "../../features/core/AdvancedMeetingRoomBookingWithDayPass";
import VirtualOffice from "../../features/core/VirtualOffice";
import EventPass from "../../features/core/EventPass";


export const routeConfig = [
  { path: "/", element: <Home /> },
  { path: "/amenities", element: <AmenitiesPage /> },
  { path: "/help", element: <Help /> },
  { path: "/meeting", element: <AdvancedMeetingRoomBooking /> },
  { path: "/dayPass", element: <AdvancedMeetingRoomBookingWithDayPass /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/virtual", element: <VirtualOffice /> },
  { path: "/event", element: <EventPass /> }
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
