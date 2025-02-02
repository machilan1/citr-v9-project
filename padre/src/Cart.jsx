const intl = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const Cart = ({ cart, checkout }) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].pizza.sizes[cart[i].size];
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h3 className="type">{item.pizza.name}</h3>
            <p className="size">{item.size}</p>
            <p className="price">{intl.format(item.pizza.sizes[item.size])}</p>
          </li>
        ))}
      </ul>
      <p>Total: {intl.format(total)}</p>
      <button onClick={checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
