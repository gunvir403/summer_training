import styles from '../styles/Checkout.module.css'
import TopNavigationBar from './TopNavigationBar';
import BlackRibbon from './BlackRibbon';

const Checkout = () => {
    return (
        <>
            <BlackRibbon />
            <TopNavigationBar />
            <div className={styles.checkout}>
                <p>Checked out Successfully, continue to Payment Options.</p>
            </div>
        </>
    )
}
    
export default Checkout;