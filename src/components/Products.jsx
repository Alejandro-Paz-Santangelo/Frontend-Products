/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { useEffect } from "react";
import ProductsTable from "./ProductsTable";
import Loader from "./Loader";
import Message from "./Message";

const Products = () => {
  const [dataBase, setDatabase] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "https://localhost:7295/lista";

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      /* console.log(res); */

      if (!res.err) {
        setDatabase(res);
        setError(null);
      } else {
        setDatabase(null);
        setError(res);
      }

      setLoading(false);
    });
  }, [url]);

  return (
    <div className="container-api">
      <h1>API DE PRODUCTOS</h1>
      {loading && <Loader />}
      {error ? (
        <Message msg={`Error ${error.status}: ${error.statusText}`} bgColor="#dc3545" />
      ) : (
        <ProductsTable data={dataBase} />
      )}
    </div>
  );
};

export default Products;
