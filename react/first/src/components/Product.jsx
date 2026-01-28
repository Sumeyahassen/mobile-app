import React from "react";
// Create a Product component for an e-commerce site:
// - image
// - title
// - description
// - price
// - rating (number 1-5)
// - isOnSale (boolean)
// - discountPercentage (optional)
function Product({image,title,description,price,rating,isOnSale,descountPercentage}) {
  return (
    <div>
      <img src={image} alt="banana" />
      <h1>{title}</h1>
      <p>prodacts is :{description}</p>
      <p>price :{price}</p>
      <p>the prodact is currently perchase :{isOnSale }</p>
      <p>current persentage : {descountPercentage}</p>
    </div>
  );
}

export default Product;
