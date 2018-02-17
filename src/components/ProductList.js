import React from 'react';
import PropTypes from 'prop-types';

function ProductList(props) {
  return (
    <ul>
      {props.products.map(p => (
        <li key={p.id} onClick={() => props.onProductSelect(p)}>
          {p.name} ({p.brand})
        </li>
      ))}
    </ul>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  onProductSelect: PropTypes.func.isRequired
};

export default ProductList;
