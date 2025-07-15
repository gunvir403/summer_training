import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router';
import { Context } from './Context';

const Products = () => {
    
    const { handleAddToCart, cart } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const productUrl = 'https://dummyjson.com/products';
    const [error, setError] = useState('');
    const [productJSON, setProductJSON] = useState([]);

    useEffect( () => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(productUrl);
                if (!response.ok) {
                    setError('Error while fetching products: ' + response.status)
                }
                const data = await response.json();
                setProductJSON(data.products);
                setLoading(false);
            } catch (e) {
                setError('Error while loading contents: ' + e.message);
            }
        }
        fetchProducts();
    },[productUrl])

    return (
        <>
        <div className="topBar">
            <h2>Shopping Page</h2>
            <div className="shopping-cart">
                <Link to='cart'><FontAwesomeIcon icon={faCartShopping} /></Link>
                <div className="badge"><p>{cart.length}</p></div>
            </div>
        </div>
        <div><h3>New Products</h3></div>
        <div className="product-flex">
            {loading ? (
                <p>Loading products....</p>
            ) : (
                productJSON.map((item) => (
                <div key={item.id} className="product-items">
                    <img src={item.thumbnail} alt={item.title} />
                    <h3>{item.title}</h3>
                    <h4>Price: ${Math.round(item.price)}</h4>
                    <p>Rating: {item.rating}</p>
                    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
            ))
            )}
            {error && (<p style={{color: "red"}}>{error}</p>)}
        </div>
        </>
    )

}

export default Products;