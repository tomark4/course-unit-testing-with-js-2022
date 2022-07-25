import React from "react";
import { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

const ProductPage = () => {
  const [isError] = useState(true);

  return <>{isError && <ErrorMessage errorMessage="There was an error" />}</>;
};

export default ProductPage;
