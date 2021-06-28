import React from "react";

export const Title = ({ children, record }) => {
  return (
    <h4
      style={{ textAlign: "left" }}
      className={record.completed === "true" ? "completedLine" : "false"}
    >
      {children}
    </h4>
  );
};
