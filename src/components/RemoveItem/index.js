import React,{useContext} from 'react';
import commerce from '../../lib/commerce'
import del from '../../assets/img/delete-button.svg';
import MyContext from '../../context.manage'
import styles from './RemoveItem.module.css'

function RemoveItem({id}) { 
  const {setCart} = useContext(MyContext)
  const removeItem = () => {
    commerce.cart.remove(id).then(res => setCart(res.cart));
  }
  
  return (
    <img className={styles.delBtn} src={del} alt="" width='30px' onClick={removeItem} />
  );
}

export default RemoveItem;