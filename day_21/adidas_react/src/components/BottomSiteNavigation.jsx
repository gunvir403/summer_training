import styles from '../styles/BottomSiteNavigation.module.css'

const BottomSiteNavigation = () => {


    return (
        <div className={styles.bottomSiteNavigation}>

            <div className={styles.linkSection}>
                <h4>PRODUCTS</h4>
                <a>Footwear</a>
                <a>Clothing</a>
                <a>Accessories</a>
                <a>Outlet-Sale</a>
                <a>New Arrivals</a>
                <a>Flat 50% Off</a>
            </div>
            <div className={styles.linkSection}>
                <h4>Sports</h4>
                <a>Cricket</a>
                <a>Running</a>
                <a>Football</a>
                <a>Gym/Training</a>
                <a>Tennis</a>
                <a>Hiking & Outdoor</a>
                <a>Basketball</a>
                <a>Swimming</a>
                <a>Skateboarding</a>
            </div>
            <div className={styles.linkSection}>
                <h4>COLLECTIONS</h4>
                <a>Ultraboost</a>
                <a>Superstar</a>
                <a>NMD</a>
                <a>Stan Smith</a>
                <a>Sustainability</a>
                <a>Predator</a>
                <a>Parley</a>
                <a>Adicolor</a>
            </div>
            <div className={styles.linkSection}>
                <h4>SUPPORT</h4>
                <a>Help</a>
                <a>My UniDays</a>
                <a>Customer Services</a>
                <a>Returns &amp; Exchanges</a>
                <a>Shipping</a>
                <a>Order Tracker</a>
                <a>Store Finder</a>
                <a>adiClub</a>
                <a>adiClub Terms and Conditions</a>
            </div>
            <div className={styles.linkSection}>
                <h4>COMPANY INFO</h4>
                <a>About Us</a>
                <a>adidas stories</a>
                <a>adidas apps</a>
                <a>Entity Details</a>
                <a>Press</a>
                <a>Careers</a>
            </div>


        </div>
    )
}

export default BottomSiteNavigation;