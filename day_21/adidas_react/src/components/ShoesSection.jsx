import styles from '../styles/ShoesSection.module.css'
import { NavLink } from 'react-router'
import { useState } from 'react'

export const data = [
    
    {   id: 1,
        name: 'SL 72 RS Shoes',
        type: 'SL 72',
        price: 9999,
        subtitle: 'Men originals',
        mainImg: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b660d06d923d44118be049e3b6c56aab_9366/SL_72_RS_Shoes_White_JS0746_01_00_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/57ebd222518d45dc8b7bb6b0d59e4d1c_9366/SL_72_RS_Shoes_White_JS0746_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7d955c4f1fa4f179a4e8308ea7ca8fc_9366/SL_72_RS_Shoes_Blue_IG2132_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1bb0e9405a2046909d824f2ccecd7048_9366/SL_72_RS_Shoes_Black_JI1282_01_standard.jpg',
    },

    {   id: 2,
        name: 'Superstar II Shoes',
        type: 'Superstar',
        price: 8399,
        subtitle: 'Lifestyle',
        mainImg: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/026c32373f34489fa982878c1ad11016_9366/Superstar_II_Shoes_White_JH5469_01_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/04f971afc7de49aeba3f6296eaa4230d_9366/Superstar_II_Shoes_White_JH5469_02_standard.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c8636740a7641489efcf492ffb6d0f6_9366/Superstar_II_Shoes_Black_JH5470_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ff60ebaf2553433694c97da7fed26528_9366/Superstar_II_Shoes_White_JI0124_01_standard.jpg',
    },

    {   id: 3,
        name: 'Samba OG Shoes',
        type: 'Samba',
        price: 10999,
        subtitle: 'Men originals',
        mainImg: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/8b389f4e89c4496193ce793523f5614c_9366/Samba_OG_Shoes_Black_JR0911_01_00_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca3d2951c63e413db0e4f6fba21c214c_9366/Samba_OG_Shoes_Black_JR0911_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9cf960f097b946e693efb5d0ac57e598_9366/Samba_OG_Shoes_Black_JR0910_01_00_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/47d74ae5a7de4914ad1763f0e7fd0169_9366/Samba_OG_Shoes_White_JI3203_01_00_standard.jpg',
    },

    {   id: 4,
        name: 'Stan Smith Shoes',
        type: 'Stan Smith',
        price: 8999,
        subtitle: 'Men originals',
        mainImg: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d7209ea6d4264da88765a90300cfac5c_9366/Stan_Smith_Shoes_White_F36575_01_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/977b0fd04cfb40c9af0fa90300cfe634_9366/Stan_Smith_Shoes_White_F36575_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/08fc0ad2aef34cce8ac7ac3200a278a6_9366/Stan_Smith_Shoes_Black_FX5499_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/5907fdfb9c2943a49aa380dee6bcfd21_9366/Stan_Smith_Shoes_White_ID3115_01_standard.jpg',
    },

    {   id: 5,
        name: 'Gazelle Shoes',
        type: 'Gazelle',
        price: 9999,
        subtitle: 'originals',
        mainImg: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/340aeb9ac43847fea000a8da0182b561_9366/Gazelle_Shoes_Burgundy_B41645_01_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca86a3b0d5d84e0591e1a8da01830e35_9366/Gazelle_Shoes_Burgundy_B41645_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/61f87dec481e4512823ea7fb0080ba1a_9366/Gazelle_Shoes_Black_BB5476_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/698e41ae0196408eb16aa7fb008046ad_9366/Gazelle_Shoes_Blue_BB5478_01_standard.jpg',
    },

    {   id: 6,
        name: 'Forum Low Shoes',
        type: 'Forum',
        price: 9999,
        subtitle: 'Men orignals',
        mainImg: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3d92ba80e65b47979462ac31012ba09d_9366/Forum_Low_Shoes_White_FY7755_01_00_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1411e2879557408088bdac31012bbd17_9366/Forum_Low_Shoes_White_FY7755_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/09c5ea6df1bd4be6baaaac5e003e7047_9366/Forum_Low_Shoes_White_FY7756_01_00_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b7beee7c32d4438aaba3acb6001c2e7b_9366/Forum_Low_Shoes_White_FY7757_01_standard.jpg',
    },

    {   id: 7,
        name: 'Campus 00s Shoes',
        type: 'Campus',
        price: 10999,
        subtitle: 'Men originals',
        mainImg: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b0b6d4a107ad4e84b3baaf8700866f07_9366/Campus_00s_Shoes_Green_H03472_01_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/169f11f7ed0443758ab9af8700867feb_9366/Campus_00s_Shoes_Green_H03472_02_standard.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ce738cbe5342421996feaf5001044964_9366/Campus_00s_Shoes_Grey_HQ8707_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb5f78e9b06142cbb58132119b5e9052_9366/Campus_00s_Shoes_Brown_ID1363_01_00_standard.jpg',
    },

    {   id: 8,
        name: 'Rivalry Low Shoes',
        type: 'Rivalry',
        price: 9999,
        subtitle: 'originals',
        mainImg: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4d5d7b1ca06a44bab576af15010496b0_9366/Rivalry_Low_Shoes_White_GX2272_01_standard.jpg',
        altImg1: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/1af4ba34a9db468c80fdaf1501053880_9366/Rivalry_Low_Shoes_White_GX2272_02_standard_hover.jpg',
        altImg2: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c0c32dac94df426aa1cc95ffd1fd1d0f_9366/Rivalry_Low_Shoes_White_IG1474_01_standard.jpg',
        altImg3: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/17deb968661c4534996c85a89776d797_9366/Rivalry_Low_Shoes_White_IG1474_02_standard_hover.jpg',
    },
    
]

const ShoesSection = () => {


    const [filter, setFilter] = useState("All");

    const types = ["All" , ...new Set(data.map (item => item.type))];

    const filteredData = filter === "All" ? data : data.filter(item => item.type === filter);

    const [imageStates, setImageStates] = useState(
        data.map((item) => ({
            id: item.id,
            currentImage: item.mainImg,
            isHovered: false
        }))
    )

    const handleMainEnter = (id, altImage) => {
        setImageStates((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, isHovered: true, currentImage: altImage } : item
            )
        )
    }

    const handleMainLeave = (id, defaultImage) => {
        setImageStates((prev) =>
            prev.map((item) =>
                item.id === id
                    ? {...item, isHovered: false, currentImage: defaultImage }
                    : item
            )
        )
    }
    
    const handleAltHover = (id, img) => {
        setImageStates((prev) =>
            prev.map((item) =>
                item.id === id ? {...item, currentImage: img } : item
            )
        )
    }

    const [dropdown, setDropdown] = useState(false);
    const toggleDropdown = () => setDropdown(!dropdown);

    return (
        <div className={styles.ShoesSection}>

            <div className={styles.filterOptions}>
                {types.map(type => (
                    <a key={type} onClick={() => setFilter(type)}>{type}</a>
                ))}
                <button onClick={toggleDropdown}>Filter</button>
            </div>

            <div className={`${styles.dropdownMenu} ${dropdown ? styles.open : ''}`}>
                Filter by Brand Type: 
                {types.map(type =>(
                    <p key={type} onClick={() => {setFilter(type); toggleDropdown()}}>{type}</p>
                ))}
            </div>

            <div className={styles.shoeFlex}>
                {filteredData.map(item =>  {
                    const state = imageStates.find((i) => i.id === item.id)
                    return (
                    <NavLink to={`/product/${item.id}`}>
                        <div 
                            key={item.id}
                            className={`${styles.flexItems} ${state.isHovered ? styles.hovered : ''}`}
                            onMouseEnter={() => handleMainEnter(item.id, item.altImg1)}
                            onMouseLeave={() => handleMainLeave(item.id, item.mainImg)}
                            >
                            <img src={state.currentImage} />
                            {state.isHovered && (
                                <div className={styles.altImages}>
                                    <img src={item.mainImg} onMouseEnter={() => handleAltHover(item.id, item.mainImg)} />
                                    <img src={item.altImg2} onMouseEnter={() => handleAltHover(item.id, item.altImg2)}/>
                                    <img src={item.altImg3} onMouseEnter={() => handleAltHover(item.id, item.altImg3)}/>
                                </div>
                            )}
                            <h4>${item.price}</h4>
                            <p>{item.name}</p>
                            <p>{item.subtitle}</p>
                        </div>
                    </NavLink>
                )})}
            </div>
            
        </div>
    )
}

export default ShoesSection;