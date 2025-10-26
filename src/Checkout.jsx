// Checkout.js
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Checkout.css'; // opcional, para estilos

const Checkout = () => {
  const cart = useSelector(state => state.cart.items);
  const navigate = useNavigate();

  const subtotal = cart.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', ''));
    return total + cost * item.quantity;
  }, 0);

  const taxRate = 0.10; // 10% tax
  const tax = subtotal * taxRate;

  const discountRate = subtotal > 50 ? 0.05 : 0; // 5% discount if subtotal > $50
  const discount = subtotal * discountRate;

  const totalAmount = (subtotal + tax - discount).toFixed(2);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleBackToCart = () => {
    navigate('/'); // Assuming cart is on home page
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="cart-total-amount">
        Total Cart Amount: ${totalAmount} ({totalItems} {totalItems === 1 ? 'item' : 'items'})
      </div>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="checkout-items-list">
          {cart.map(item => (
            <div key={item.name} className="checkout-item">
              <img className="checkout-item-image" src={item.image} alt={item.name} />
              <div className="checkout-item-details">
                <div className="checkout-item-name">{item.name}</div>
                <div className="checkout-item-quantity">Quantity: {item.quantity}</div>
                <div className="checkout-item-total">Total: ${(parseFloat(item.cost.replace('$', '')) * item.quantity).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="checkout-summary">
          <div>Subtotal: ${subtotal.toFixed(2)}</div>
          <div>Tax (10%): ${tax.toFixed(2)}</div>
          {discount > 0 && <div>Discount (5%): -${discount.toFixed(2)}</div>}
          <h2 className="cart-total-amount">Total: ${totalAmount}</h2>
        </div>
      )}
      {cart.length > 0 && (
        <div className="continue-shopping-btn">
          <button className="get-started-button" onClick={handleBackToCart}>Continuar Comprando</button>
          <button className="get-started-button1">Proceder al Pago</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
