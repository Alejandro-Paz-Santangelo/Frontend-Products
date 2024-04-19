/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types

const ProductsTable = ({ data }) => {
  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr className="table-primary">
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripción</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        {data && Array.isArray(data) ? (
          data.map((product) => (
            <tr key={product.id}>
              <th className="table-danger" scope="row">{product.id}</th>
              <td>{product.nombre}</td>
              <td>{product.descripcion}</td>
              <td>$ {product.precio}</td>
            </tr>
          ))
        ) : (
          <p>No hay datos de productos.</p>
        )}
      </tbody>
    </table>
  );
};

export default ProductsTable;
