import { useState, useEffect } from 'react';
import styles from '../styles/BlackRibbon.module.css';

const BlackRibbon = () => {

    const data = [
        {   id: 1,
            heading: "SIGN UP & GET 10% OFF",
            description: "Members get more! Like a 10% discount voucher, early access to the sale and access to limited edition products. Sign up now!" }, 
        {   id: 2,
            heading: "FREE DELIVERY, RETURN AND EXCHANGE",
            description: "For all orders, Return & Exchange is offered for free." },
        {   id: 3,
            heading: "EXTRA 5% OFF ON PREPAID ORDERS",
            description: "Save 5% Extra on prepaid payments for all orders under Rs 5000/-. Easy Payments from UPI, Credit Card, and Net-banking" },
        {   id: 4,
            heading: "STUDENTS GET 15% OFF",
            description: "For instant access to this discount simply join now and verify your student status with UNiDAYS !" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const [dropdown, setDropdown] = useState(false);

    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div>
            <div className={styles.triggerDiv} onClick={toggleDropdown}>
                {data.map((text, index) => {
                    return index === currentIndex ?
                    <p key={index}>{text.heading} &#8595;</p> :
                    null;
                })}
            </div>
            <div className={`${styles.slidingDiv} ${dropdown ? styles.open : ''}`}>
                {data.map((text) => (
                    <div key={text.id} className={styles.content}>
                    <h3>{text.heading}</h3>
                    <p>{text.description}</p>
                    </div>
                ))}
                <button onClick={toggleDropdown}>Close</button>
                <div className={styles.overlay} onClick={toggleDropdown}></div>
            </div>
        </div>
    )
}

export default BlackRibbon;