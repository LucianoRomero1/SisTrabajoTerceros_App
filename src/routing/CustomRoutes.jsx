import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Home } from "../components/pages/Error";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Navbar } from "../components/layout/Navbar";

export const CustomRoutes = () => {
    return (
        <BrowserRouter>
            {/* {layout top} */}
            <Navbar />
            <Header />
            
            {/* {Central content & Routes} */}
            <section>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </section>

            {/* {layout bottom} */}
            <Footer />
        </BrowserRouter>
    )
}