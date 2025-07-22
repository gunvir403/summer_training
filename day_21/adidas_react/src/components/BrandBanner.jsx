import styles from '../styles/BrandBanner.module.css'

const BrandBanner = () => {

    const data = [
        {   name: 'SUPERSTAR',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/03_originals_ss25_the_original_introduce_plp_the_original_iwp_superstar_d_b7e59d996e.jpg'
        },
        {   name: 'SAMBA',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/02_originals_ss25_the_original_introduce_plp_the_original_iwp_samba_d_b5c4eebc15.jpg'
        },
        {   name: 'GAZELLE',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/04_originals_ss25_the_original_introduce_plp_the_original_iwp_gazelle_d_c092498ed0.jpg'
        },
        {   name: 'SL 72',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/05_originals_ss25_the_original_introduce_plp_the_original_iwp_sl_72_d_1bf4fd9ac3.jpg'
        },
        {   name: 'SPEZIAL',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/01_originals_ss25_the_original_introduce_plp_the_original_iwp_spezial_d_67b98e7c96.jpg'
        },
        {   name: 'FIREBIRD',
            imageUrl: 'https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/06_originals_ss25_the_original_introduce_plp_the_original_iwp_firebird_d_d3b10c8b38.jpg'
        }

    ]

    return (
        <div className={styles.brandBanner}>

            <div className={styles.navPill}>
                <a>BACK</a>
                <a>Home /</a>
                <a>Originals /</a>
                Shoes
            </div>

            <h1>ADIDAS ORIGINALS SHOES</h1>

            <div className={styles.hoverFlex}>
                {data.map((info) => (
                    <div key={info.name} className={styles.hoverBanner}>
                        <img src={info.imageUrl} alt={info.name} />
                        <div>
                            <a>{info.name}</a>
                        </div>
                    </div>
                ))}
            </div>

            <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto:best,fl_lossy/originals_ss25_the_original_introduce_plp_the_original_iwp_background_media_d_79a5b46e37.jpg' />
        
        </div>
    )
}

export default BrandBanner;