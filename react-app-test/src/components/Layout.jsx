import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <div
        style={{
          backgroundColor: "#202120",
          color: "white",
          height: 80,
          padding: 30,
          textAlign: "center",
        }}
      >
        header
      </div>
      <section className="content">{children}</section>
      <div
        style={{
          backgroundColor: "#457895",
          color: "black",
          height: 80,
          padding: 30,
          textAlign: "center",
        }}
      >
        footer
      </div>
    </div>
  );
};

export default Layout;
