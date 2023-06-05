import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PrivateLayout } from "../components/private/PrivateLayout";
import { PublicLayout } from "../components/public/PublicLayout";
import { Home } from "../components/private/private";
import { Login } from "../components/public/Login";
import { Error } from "../components/layout/layout";
import { Global } from "../helpers/Global";
import { Logout } from "../components/private/Logout";

export const Routing = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={Global.baseUrl} element={<PublicLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path={Global.baseUrl} element={<PrivateLayout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="logout" element={<Logout />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
