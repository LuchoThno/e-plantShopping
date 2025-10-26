import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './CartItem.css';
import { removeItem, updateQuantity } from './CartSlice.js';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calcular total del carrito
  const totalAmount = cart.reduce((total, item) => {
    const cost = parseFloat(item.cost.replace('$', '')) || 0;
    return total + cost * item.quantity;
  }, 0).toFixed(2);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleContinueShopping = (e) => {
    onContinueShopping(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const calculateTotalCost = (item) => {
    const cost = parseFloat(item.cost.replace('$', '')) || 0;
    return (cost * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    navigate('/checkout'); // Redirige a la pantalla de checkout
  };

  return (
    <div className="cart-container">
      <h2 className="cart-total-amount">
        Total Cart Amount: ${totalAmount} ({totalItems} {totalItems === 1 ? 'item' : 'items'})
      </h2>
      <div className="cart-items-list">
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  –
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              <button
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
                aria-label={`Remove ${item.name} from cart`}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="continue-shopping-btn">
        <button
          className="get-started-button"
          onClick={handleContinueShopping}
          type="button"
        >
          Continue Shopping
        </button>
        <br />
        <button
          className="get-started-button1"
          type="button"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  onContinueShopping: PropTypes.func.isRequired,
};

export default CartItem;
