import React from 'react';
import ProductRow from './ProductRow.jsx';
import ProductCategoryRow from './ProductCategoryRow.jsx';

class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows = [];
    let lastCategory = null;
    // let prods = this.props.products;
    // const products = [
    //   { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    //   { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    //   { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    //   { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    //   { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    //   { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
    // ];
    console.log(this.props.products);

    this.props.products.forEach(product => {
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
