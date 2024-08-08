import React, { useState } from "react";

//In the `Item` component, when the user clicks the `<button>` element, the item
//should be added to their virtual cart. The way we'll show the user that the item
//is in the cart is by changing the className on the `<li>` element:

//```jsx
//<li className="in-cart">
//{/* the item is in the cart */}
//</li>

//<li className="">
//{/* the item is NOT in the cart */}
//</li>
//```

//If the item _is not_ in the cart, the `<button>` element's text should read "Add
//to Cart", and if the item _is_ in the cart, the `<button>` element's text should
//read "Remove From Cart". Naturally, you'll also need to add state to the `Item`
//component to solve this deliverable!

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const handleCartToggle = () => {
    setIsInCart((prevIsInCart) => !prevIsInCart)
  };
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
