import React from 'react';

const Product = ({ ...rest }) => {
  return <div className="product">
    {rest.match.params.productId}
  </div>;
};

export default Product;
