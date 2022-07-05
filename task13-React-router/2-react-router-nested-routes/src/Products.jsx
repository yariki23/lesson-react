import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/book`}>Book</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/ball`}>Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:productId`} component={Product} />
        <Route exact path={match.url}>
          <span>Select a product please</span>
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
