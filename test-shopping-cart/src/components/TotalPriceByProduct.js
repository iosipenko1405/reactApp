import React from "react";

const TotalPriceByProduct = ({ qty, price }) => (
  <span>
    {qty * price}
  </span>
)

export default TotalPriceByProduct;