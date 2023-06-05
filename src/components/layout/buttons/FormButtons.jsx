import React from "react";
import { Link } from "react-router-dom";

export const FormButtons = ({ routeBack }) => {
  return (
    <div className="float-end m-3">
      <Link to={routeBack} className="btn btn-secondary text-dark">
        <i className="fas fa-undo-alt"></i> Volver
      </Link>
      <button className="btn btn-info ms-3" type="submit">
        <i className="far fa-check-circle"></i> Guardar cambios
      </button>
    </div>
  );
};
