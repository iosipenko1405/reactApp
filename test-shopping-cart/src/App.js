import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import TotalSum from './components/TotalSum';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [{img: 'http://attitudes4innovation.com/wp-content/uploads/2015/09/product-05.jpg', title: 'Product 1', subtitle: 'Subtitle of product 1', skuId: 1, price: 50, qty: 5, maxQty: 6}, {img: 'http://attitudes4innovation.com/wp-content/uploads/2015/09/product-05.jpg', title: 'Product 2', subtitle: 'Subtitle of product 2', skuId: 2, price: 30, qty: 1, maxQty: 3}, {img: 'http://attitudes4innovation.com/wp-content/uploads/2015/09/product-05.jpg', title: 'Product 3', subtitle: 'Subtitle of product 3', skuId: 3, price: 15, qty: 1, maxQty: 2}]
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(id, qty){
    this.setState({
      products: this.state.products.map((product) => (
        id === product.skuId ? {...product, qty: qty} : product
      ))
    })

    console.log(this.state.products);
  }

  render() {
    return (
      <div>
        <ProductList products={this.state.products} onChange={this.onChange} />
        <TotalSum products={this.state.products} />
      </div>
    );
  }
}

export default App;
