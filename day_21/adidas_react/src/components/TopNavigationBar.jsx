import styles from '../styles/TopNavigationBar.module.css'
import logo from '../assets/adidas.jpg'
import { NavLink } from 'react-router'
import { data } from './ShoesSection'
import { useState } from 'react'

const TopNavigationBar = () => {

    const Dropdown = () => {

        return (
            <div className={styles.dropdown} onMouseLeave={() => setShowDropdown(false)}>

                <div className={styles.leftDrop}>
                    <h4>WHAT'S NEW?</h4>
                    <p>You Got This!</p>
                    <p>adiClub</p>
                    <p>Terrex</p>
                    <p>T-Toe Collection</p>
                    <h4>COLLABORATIONS</h4>
                    <p>SPZL</p>
                    <p>Stella McCartney</p>
                    <p>Y-3</p>
                    <h4>MOTORSPORT</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/zm6hmdni_1_55f531b5ca.png" />
                </div>

                <div className={styles.dropMenu}></div>

                <div className={styles.dropItems}>
                    <h4>ORIGINALS</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/originals_hn_fc7f68b545.jpg" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes</p>
                    <p>Clothing</p>
                    <p>Accessories</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Firebird</p>
                    <p>Samba</p>
                    <p>Gazelle</p>
                    <p>SL72</p>
                    <p>Superstar</p>
                    <p>Stan Smith</p>
                    <p>Campus</p>
                    <p>Forum</p>
                    <p>Rivalry</p>
                </div>

                <div className={styles.dropItems}>
                    <h4>SPORTSWEAR</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/image_2025_06_05_15_53_49_319_f8421d0a3d.png" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes</p>
                    <p>Clothing</p>
                    <p>Accessories</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Z. N. E</p>
                    <p>House of Tiro</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Grandcourt</p>
                    <p>Advantage</p>
                    <p>Ultraboost DNA</p>
                    <p>Adilette</p>
                    <p>VL Court</p>
                </div>

                <div className={styles.dropItems}>
                    <h4>RUNNING</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/image_2025_06_05_15_53_49_301_c234d2fe09.png" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes</p>
                    <p>Clothing</p>
                    <p>Accessories</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Everyday Running</p>
                    <p>Racing</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Ultraboost</p>
                    <p>Supernova</p>
                    <p>Adizero</p>
                    <p>Duramo</p>
                    <p>adidas Runners</p>
                </div>

                <div className={styles.dropItems}>
                    <h4>GYM &amp; TRAINING</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/image_2025_06_05_15_53_49_276_400f9138f0.png" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes</p>
                    <p>Clothing</p>
                    <p>Accessories</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Yoga</p>
                    <p>HIIT</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Sports Bras</p>
                    <p>Tights</p>
                    <p>T-Shirts</p>
                    <p>Shorts</p>
                    <p>Pants</p>
                </div>

                <div className={styles.dropItems}>
                    <h4>FOOTBALL</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/1glbl_ss25_celestial_victory_pack_2_combi_menu_nav1_b407bdf199.jpg" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes &amp; Studs</p>
                    <p>Jerseys</p>
                    <p>Accessories</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Training Wear</p>
                    <p>Personalisable Jerseys</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Clubs</p>
                    <p>National Teams</p>
                    <p>Predator</p>
                    <p>Copa</p>
                    <p>F50</p>
                </div>

                <div className={styles.dropItems}>
                    <h4>CRICKET</h4>
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/344x160_100_15379e6dcf.jpg" />
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <p>Shoes</p>
                    <p>Cricket Jerseys</p>
                    <p>Cricket Pants</p>
                    <p>Personisable Jerseys</p>
                    <div style={{margin: "10px 0 10px 0"}}></div>
                    <h4>OTHER SPORTS</h4>
                    <p>Walking</p>
                    <p>Golf</p>
                    <p>Swim</p>
                    <p>Basketball</p>
                    <p>Tennis</p>
                    <p>Skateboarding</p>
                    <p>Hiking &amp; Outdoor</p>
                    <p>Padel</p>
                </div>

            </div>
        )
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [noResults, setNoResults] = useState(false);

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )
        setFilteredData(filtered);
        setNoResults(filtered.length === 0);
    }


    return (
        <>
            <div className={styles.topNavigationBar}>

                <div className={styles.left}>
                    <NavLink to='/'><img src={logo} alt='Adidas Logo' /></NavLink>
                </div>

                <div className={styles.center}>
                    <p>SHOES</p>
                    <p>MEN</p>
                    <p>WOMEN</p>
                    <p>KIDS</p>
                    <h4 onMouseEnter={showDropdown ? {} : () => setShowDropdown(true)}>SPORTS &amp; LIFESTYLE</h4>
                    <p>OUTLET</p>
                    <h4 style={{color: "red"}}>EOSS SALE IS LIVE!</h4>
                </div>

                <div className={styles.right}>

                    <div className={styles.topRight}>
                        <NavLink to='/signup'>sign up</NavLink>
                        <NavLink to='/login'>log in</NavLink>
                    </div>

                    <div className={styles.bottomRight}>
                        <div className={styles.searchBox}>
                            <input type='text' placeholder='Search' value={searchQuery} onChange={handleSearch} />
                        </div>
                        <a>User</a>
                        <NavLink to='/cart'>Cart</NavLink>
                    </div>

                </div>

            </div>
            {showDropdown ? (<Dropdown />) : ('')}
            {searchQuery && (
                <div className={styles.searchResults}>
                    {noResults ? (
                        <p style={{color: "red"}}>No Results found</p>
                    ) : (
                        <>
                            {filteredData.map(item => (
                                <NavLink to={`/product/${item.id}`}>
                                    <div className={styles.searchFlex} key={item.id} onClick={() => setSearchQuery('')}>
                                        <img src={item.mainImg} />
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>
                                </NavLink>
                            ))}
                        </>
                        )
                    }

                </div>
            )}
        </>
    )
}

export default TopNavigationBar;