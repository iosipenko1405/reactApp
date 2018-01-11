import React from "react";

const TotalSum = ({ products }) => (
  <div className="total-sum a-right">
    {
      products.reduce(function(sum, current) {
      return sum + (current.qty * current.price)
      }, 0)
    }
  </div>
)

export default TotalSum;