import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Error } from "../components/pages/Error";
import { Footer } from "../components/layout/Footer";
import { Nav } from "../components/layout/Nav";
import { Placeholder } from "../components/pages/Placeholder";
import { Box } from "@chakra-ui/react";
import { Details } from "../components/pages/Details";

export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      {/* {layout top} */}
      <Nav />

      {/* {Central content & Routes} */}
      <Box px={10} py={3}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/home" element={<Home />} />
          <Route path="/placeholder" element={<Placeholder />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </Box>

      {/* {layout bottom} */}
      <Footer />
    </BrowserRouter>
  );
};
