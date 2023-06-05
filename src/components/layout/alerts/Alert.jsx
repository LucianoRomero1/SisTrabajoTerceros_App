import React from "react";
import { bounce } from "react-animations";
import { StyleSheet, css } from "aphrodite";

export const Alert = ({ typeAlert, typeAction }) => {
  const translateKeyframes = {
    "0%": {
      transform: "translateY(-120px)",
    },
    "100%": {
      transform: "translateY(0px)",
    },
  };

  const dynamicStyle = StyleSheet.create({
    animation: {
      animationDuration: "400ms",
      animationIterationCount: "1",
      animationName: [translateKeyframes],
    },
  });

  return (
    <div className="container w-50 mt-2">
      <div className={css(dynamicStyle.animation)}>
        {typeAlert == "success" ? (
          <div className="alert alert-success">
            <i className="fas fa-check-circle me-3"></i>
            <span>Se ha {typeAction} correctamente</span>
          </div>
        ) : (
          <div className="alert alert-danger">
            <i className="fas fa-times-circle me-3"></i>
            <span>Se ha producido un error al {typeAction} los datos</span>
          </div>
        )}
      </div>
    </div>
  );
};
