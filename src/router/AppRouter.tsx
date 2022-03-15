import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Series from "../pages/Series";
import Chart from "../pages/Chart";
import MediaDetails from "../pages/MediaDetails";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/chart" element={<Chart />} />
      <Route path="/:mediaType/:id" element={<MediaDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;