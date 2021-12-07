import React,{useState,useContext} from 'react';
import MyContext from '../../context.manage'
import commerce from '../../lib/commerce';
import styles from './Quantity.module.css'
function ShortQuantity({id,quantity}) {
  console.log('id',id);
  const {setCart} = useContext(MyContext)

  if(qty<1){
    setQty(1)
    
  }
  console.log('qty',qty);
  const decrease = ()=>{
   setQty(qty=>qty-1);
   commerce.cart.update(id, {quantity:qty}).then(res => setCart(res.cart))
  }
  
  const increase = async ()=>{
   
    setQty(qty=>qty+1);
 
    const item = await commerce.cart.update(id, {quantity:qty})
    // console.log('itemCart',item);
    setCart(item.cart)

  }
  const handleChange =  (e)=>{
    console.log('e',e.target.value);
    setQty(e.target.value)
    // const item = await commerce.cart.update(id, qty)
    // setCart(item.cart)
  }
  return (
    
    <div className={styles.container}>
     
      <div className={styles.quantity}>
        <button className={`${styles.btn} ${qty===1?styles.disabled:''}`} onClick={decrease}>-</button>
        <input className={styles.input} type="text" value={qty} onChange={handleChange}/>
        <button className={styles.btn} onClick={increase}>+</button>
      </div>
    </div>
  );
}

export default ShortQuantity;