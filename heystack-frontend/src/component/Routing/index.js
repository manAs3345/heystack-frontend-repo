import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/index.js"
import AboutUs from "../AboutUs/index.js";

const RoutingPath = {
  Home: '/',
  AboutUs:'/about',
  Service: '/service',
  Contact: '/contact',
  NotFound: '*'
}

const Routing = () => {
  return (
    <Routes>
      <Route path={RoutingPath.Home} element={<Home />} />
      <Route path={RoutingPath.Service} element={<AboutUs />} />
      <Route path={RoutingPath.AboutUs} element={<AboutUs />} /> 
      <Route path={RoutingPath.Contact} element={<AboutUs />} /> 
      <Route path={RoutingPath.NotFound} element={<Home />} /> 
    </Routes>
  );
};

export default Routing;