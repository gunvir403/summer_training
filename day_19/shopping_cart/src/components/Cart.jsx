import { Link } from 'react-router';

const Cart = ({ cart, removeFromCart }) => (
    <div>
        <div className='topBar'>
            <h3>Shopping Cart</h3>
            <Link to="/">Product Page</Link>
        </div>
        {cart.length === 0 ? (
            <p>Your cart is empty!</p>
        ) : (
            <div className='cart-flex'>
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.title} width="50" />
                        <h3>{item.title}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                    ))}
                <p>Total Bill: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            </div>
        )}
    </div>
);
export default Cart;
