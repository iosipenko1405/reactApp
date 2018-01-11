import React from 'react';
import TotalPriceByProduct from './TotalPriceByProduct';
import CountApp from './CountApp';

const ProductList = ({ products, onChange }) => (
  <ul className="list-group">
    {products.map((product) => {
      return (
        <li key={product.skuId} 
          className="list-group-item row" >
          <div className="col col-lg-2">
            <img src={product.img} alt=""/>
          </div>

          <div className="col col-lg-3">
            <h3>{product.title}</h3>
            <h4>{product.subtitle}</h4>
          </div>

          <div className="col col-lg-2">
            {product.price}
          </div>

          <div className="col col-lg-3">
            <CountApp count={product.qty} maxCount={product.maxQty} onCountProductsChange={(qty) => onChange(product.skuId, qty)}/>
          </div>

          <div className="col col-lg-2 a-right">
            <TotalPriceByProduct qty={product.qty} price={product.price}/>
          </div>
        </li>
      )
    })}
  </ul>
)

export default ProductList;