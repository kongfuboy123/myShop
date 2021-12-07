import React,{useContext} from 'react';
import commerce from '../../lib/commerce'
import MyContext from '../../context.manage'
import styles from './AddToCart.module.css'
function AddToCart({id,quantity}) {
 
  const {setCart} = useContext(MyContext)
  
  const addToCart =async() => {
  
    const item = await commerce.cart.add(id, quantity);

    setCart(item.cart);
    
  }
  
  return (
    <div className={styles.container} onClick={addToCart} >
      <h1 className={styles.title}>AddToCart</h1>
    </div>
  );
}

export default AddToCart;