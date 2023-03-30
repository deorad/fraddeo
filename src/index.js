import React, { Suspense, lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import App from "./App";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Lat1 = lazy(() => import("./Lat1"));
const Lat2 = lazy(() => import("./Lat2"));
const Lat3 = lazy(() => import("./Lat3"));
const Lat4 = lazy(() => import("./Lat4"));
const Lat5 = lazy(() => import("./Lat5"));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Lat1" element={<lat1 />} />
        <Route path="/Lat2" element={<Lat2 />} />
        <Route path="/Lat3" element={<Lat3 />} />
        <Route path="/Lat4" element={<Lat4 />} />
        <Route path="/lat5" element={<Lat5 />} />
      </Routes>
    </Suspense>
  </Router>
);
