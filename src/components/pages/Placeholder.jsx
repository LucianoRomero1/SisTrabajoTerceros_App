import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../layout/Header";
import { Details } from "./Details";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { prependRoute } from "../../features/breadcrumbs/breadcrumbSlice";

export const Placeholder = () => {
  const [breadcrumb, setBreadcrumb] = useState({
    route: "",
    name: "",
  });
  const dispatch = useDispatch();

  const handleSubBreadc = (e) => {
    let breadcrumb = {
      id: uuid(),
      route: e.target.ariaLabel,
      name: e.target.name,
      type: "Sub",
    };
    setBreadcrumb(breadcrumb);

    dispatch(prependRoute(breadcrumb));
  };

  return (
    <div className="">
      <Header />
      <p>Im placeholder page</p>
      <Link to="/details" element={<Details />}>
        <Button
          name="Details"
          aria-label="/details"
          w="10%"
          onClick={handleSubBreadc}
        >
          Details
        </Button>
      </Link>
    </div>
  );
};
