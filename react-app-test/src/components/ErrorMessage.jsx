import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <h1 style={{ color: "red" }} className="p-5 text-center">
        {errorMessage}
      </h1>
    </div>
  );
};

export default ErrorMessage;
