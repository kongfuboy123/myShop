import React,{useState,useEffect} from 'react';
import {NavLink,Link}  from 'react-router-dom'
import styles from './Nav.module.css'
import cartIcon from '../../assets/img/cart.svg'
import search from '../../assets/img/Search_Icon.svg'
function Nav({cart,apiCategories,navStyle,subNavStyle}) {

  const [categories,setCategories]=useState()
  
  useEffect(()=>{
    if(apiCategories.length > 0) {
      const cate = apiCategories.filter(categories => categories.slug==='types')[0].children
    
      setCategories(cate)
    }
  },[apiCategories])
  return (
    <div className={styles.container} style={navStyle}>
      <div className={styles.up}>

        <div className={styles.left}>
          <Link to='/products' className={styles.shopTitle}>
            Shop
          </Link> 
          <Link to='/about' className={styles.aboutTitle}>
            About
          </Link> 
        </div>
        <div className={styles.middle}>
          <Link to='/' className={styles.logoTitle}>
            myJewelery
          </Link> 
        

          {/* <div className={styles.search}>
            <input  className={styles.input} type="text" />
            <img className={styles.searchIcon} src={search} alt="" width='40px' />
            
          </div> */}
        </div>
       

        <div className={styles.right}>
          <Link to='/login' className={styles.loginTitle}>
            Login
          </Link> 

          <Link to='/cart' className={styles.cart}>
            <img className={styles.cartIcon} src={cartIcon} alt="" width='30px' />
            <div className={styles.cartNum}>{cart.total_items}</div> 
          </Link>  
        </ div>

      </div>

      <div className={styles.down} style={subNavStyle}>

        <NavLink to='/products' className={styles.all}>All</NavLink>
          
        
        <ul className={styles.category}>
          
          {
            categories?(
              categories.map(cate =>
                <li key={cate.id} > 
                  <NavLink to={`/category/${cate.id}`} className={styles.cate} >{cate.name}
                  </NavLink>
                </li>
              )
            ):''
          }
        </ul>
        
      </div>

    </div>
  );
}

export default Nav;