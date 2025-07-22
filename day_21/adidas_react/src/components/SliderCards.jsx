import styles from '../styles/SliderCards.module.css'
import { useRef } from 'react'

const SliderCards = () => {

    const data = [
        {
            id: 1,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_y3_chapter_1_aop_y3_fw25_launch_mglp_navigation_card_teaser_d_d9b2790594.jpg',
            title: 'Y-3 Fall/Winter 2025',
            subtitle: 'An amber ink story.'
        },
        {
            id: 2,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_edison_chen_clot_stan_smith_originals_fw25_launch_row_glpwoman_navigation_card_teaser_asset_d_3053f7333b.jpg',
            title: 'CLOT Collection by Edison Chen',
            subtitle: 'The club is open, for those rewriting the rules'
        },
        {
            id: 3,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_willy_chavarria_originals_fw25_launch_catlp_navigation_card_teaser_d_f1ff1f7e28.jpg',
            title: 'adidas Originals x Willy Chavarria',
            subtitle: 'Generations of Chicano Style'
        },
        {
            id: 4,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/TC_2_ef28af0775.jpg',
            title: 'Shoe Charms',
            subtitle: 'Use your points to add a personal touch to your sneakers. Stand out!'
        },
        {
            id: 5,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_the_simpsons_commercial_fw25_launch_klp_navigation_card_teaser_d_9f5ff91af0.jpg',
            title: 'The Simpsons',
            subtitle: 'Home is where fun lives'
        },
        {
            id: 6,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/TC_3_1_a7a9533fdd.jpg',
            title: 'Originals Studio Event',
            subtitle: 'our points can get you the access to exclusive nights of culture and music.'
        },
        {
            id: 7,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/global_silverstone_motorsports_fw25_launch_hp_glp_catlp_navigation_card_teaser_d_4caff0717e.jpg',
            title: 'A History of Speed',
            subtitle: 'The new adidas x Mercedes-AMG PETRONAS F1 Silver Arrows Pack.'
        },
        {
            id: 8,
            imgUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/if_w_gt_800,w_800/NOOS_TC_45b556333b.jpg',
            title: 'Never Out Of Style',
            subtitle: 'Shop the best of adidas'
        },
    ]

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (container) {
            const scrollAmount = 414;
            container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behaviour: "smooth" })
        }
    }

    return (
        <div className={styles.sliderCards}>
            <h3>WHAT'S HOT</h3>
            <div className={styles.sliderContainer}>
                <button className={styles.arrowLeft} onClick={() => scroll("left")}>&#8592;</button>
                <div className={styles.slider} ref={scrollRef}>
                    {data.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <img src={item.imgUrl} />
                            <h3>{item.title}</h3>
                            <p>{item.subtitle}</p>
                        </div>
                    ))}
                </div> 
                <button className={styles.arrowRight} onClick={() => scroll("right")}>&#8594;</button>   
            </div>          
        </div>
    )
}

export default SliderCards;