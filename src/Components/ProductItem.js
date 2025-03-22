import React from "react";

function ProductItem({ finalProducts }) {
  let product = finalProducts.map((v, i) => {
    return (
      <div key={`prod-item-${i}`} className="shadow-2xl text-center pb-4">
        <img src={v.images} />
        <h4> {v.title}</h4>
        <b> Rs {v.price} </b>
      </div>
    );
  });
  return <>{product}</>;
}

export default ProductItem;
