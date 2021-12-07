import React,{useState,useContext} from 'react';
import MyContext from '../../context.manage'
import commerce from '../../lib/commerce';
import styles from './Quantity.module.css'
function ShortQuantity({id,quantity}) {
 
  const {setCart} = useContext(MyContext)

  const decrement = ()=>{
  
   commerce.cart.update(id, {quantity:quantity-1}).then(res => setCart(res.cart))
  }
  
  const increment =  ()=>{
   
    commerce.cart.update(id, {quantity:quantity+1}).then(res => setCart(res.cart))
   

  }
  const handleChange = async (e)=>{
  
    if(e.target.value<1){
      e.target.value=1
    }
    commerce.cart.update(id, {quantity:e.target.value}).then(res => setCart(res.cart))
   
  }
  return (
    
    <div className={styles.container}>
     
      <div className={styles.quantity}>
        <button className={`${styles.btn} ${quantity===1?styles.disabled:''}`} onClick={decrement}>-</button>
        <input className={styles.input} type="text" value={quantity} onChange={handleChange}/>
        <button className={styles.btn} onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default ShortQuantity;