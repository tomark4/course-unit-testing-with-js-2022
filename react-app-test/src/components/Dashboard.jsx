import React, { useEffect, useRef, useState } from "react";
import { getProducts, storeTodo } from "../services/products";
import ErrorMessage from "./ErrorMessage";
import * as validator from "validator";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const mounted = useRef(true);
  const [values, setValues] = useState({
    name: "",
    lastName: "",
  });
  const [errorName, setErrorName] = useState("");

  const [success, setSuccess] = useState("");

  useEffect(() => {
    (async () => {
      if (mounted.current) {
        try {
          // const res = await getTodos();
          // console.log(res.data);
          const { data } = await getProducts();
          setProducts(data);
          setLoading(false);
        } catch (err) {
          setError(true);
          setLoading(false);
          //console.log(err);
        }
      }
    })();

    return () => {
      mounted.current = false;
    };
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorName("");
    if (validator.isEmpty(values.name)) {
      setErrorName("name required");
      return;
    }
    try {
      await storeTodo({
        title: values.name,
        completed: false,
      });
      setSuccess("Store data!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      {error && <ErrorMessage errorMessage="There was an error" />}
      {loading && <h1>loading</h1>}
      {!loading && products && (
        <>
          <h1>Products</h1>
          {products.map((item) => (
            <div className="m-4" key={item.id}>
              <p>id: {item.id}</p>
              <p>Name: {item.name}</p>
              <button type="button">add new</button>
              <hr />
            </div>
          ))}
        </>
      )}

      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={values.name}
                onChange={(e) => handleChange(e)}
              />
              {errorName && <div className="text-danger">{errorName}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="lastName">last name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="form-control"
                value={values.lastName}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </form>
          {success && <div className="alert alert-success mt-3">{success}</div>}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
