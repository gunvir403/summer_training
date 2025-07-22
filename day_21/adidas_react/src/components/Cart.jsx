import styles from '../styles/Cart.module.css'
import BlackRibbon from './BlackRibbon'
import TopNavigationBar from './TopNavigationBar'
import { Context } from './Context.mjs'
import { useContext } from 'react'
import { NavLink } from 'react-router'

const Cart = () => {

    const {cart, handleRemoveFromCart } = useContext(Context);

    return (
        <>
            <BlackRibbon />
            <TopNavigationBar />
            <div className={styles.cart}>
                {cart.length === 0 ? (
                    <p>Your Cart is Empty!</p>
                ) : (
                        <>
                            {cart.map((item) => (
                                <div key={item.id} className={styles.cartItem}>
                                    <img src={item.mainImg} />
                                    <h3>{item.name}</h3>
                                    <p>${Math.round(item.price)}</p>
                                    <p>Quantity: {item.quantity}</p>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                                </div>
                            ))}
                            <p>Total Bill: ${Math.round(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
                            <NavLink to='/checkout'><button>Checkout</button></NavLink>
                        </>
                    )
                }
            </div>
        </>
    )
}

export default Cart;