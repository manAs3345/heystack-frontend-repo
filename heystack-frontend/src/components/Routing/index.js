import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/index.js"
import Services from "../Services/index.js";
import AboutUs from "../AboutUs/index.js";
import Contact from "../Contact/index.js";
import NotFound from "../NotFound/index.js";

const RoutingPath = {
  Home: '/',
  AboutUs:'/about',
  Services: '/services',
  Contact: '/contact',
  NotFound: '*'
}

const Routing = () => {
  return (
    <Routes>
      <Route path={RoutingPath.Home} element={<Home />} />
      <Route path={RoutingPath.Services} element={<Services />} />
      <Route path={RoutingPath.AboutUs} element={<AboutUs />} /> 
      <Route path={RoutingPath.Contact} element={<Contact />} /> 
      <Route path={RoutingPath.NotFound} element={<NotFound />} /> 
    </Routes>
  );
};

export default Routing;