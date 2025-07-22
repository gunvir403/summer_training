import TopNavigationBar from './TopNavigationBar'
import styles from '../styles/Product.module.css'
import { useParams } from 'react-router'
import BlackRibbon from './BlackRibbon'
import { Context } from './Context.mjs'
import { data } from './ShoesSection'
import { useContext } from 'react'

const Product = () => {
    const { id } = useParams();
    const product = data.find(p => p.id === parseInt(id))
    const { handleAddToCart } = useContext(Context);


    if (!product) {
        return (
            <div>
                <BlackRibbon />
                <TopNavigationBar />
                <p>Product not found!</p>
            </div>)
    }

    return (
        <>
        <BlackRibbon />
        <TopNavigationBar />
        <div className={styles.product}>
            <div className={styles.imgFlex}>
                <img src={product.mainImg} />
                <img src={product.altImg1} />
                <img src={product.altImg2} />
                <img src={product.altImg3} />
            </div>
            <div className={styles.infoFlex}>
                <p>{product.subtitle}</p>
                <h1>{product.name}</h1>
                <p>Price: ${product.price}</p>
                <p>Category: {product.type}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
        </>
    )
}

export default Product;