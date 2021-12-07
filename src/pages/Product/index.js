import React,{useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import Carouse from '../../components/Carouse';
import commerce from '../../lib/commerce';
import Quantity from '../../components/Quantity'
import AddToCart from '../../components/AddToCart'

import styles from './index.module.css'
function Product() {
  
  const params = useParams();

  const [product,setProduct] = useState()
  const [quantity,setQuantity] = useState(1)
  
  const getProduct = () => {
    commerce.products.retrieve(params.pid).then((product) => setProduct(product)).catch((error) => {
      console.log('There was an error fetching the product', error);
    });
  }

  useEffect(() => {
    getProduct()
  }, [])
  

  return (
    <div>
      {product?(
        <div className={styles.container}>

          <div className={styles.left}>
            <div className={styles.CarouselWrapper}>
              <Carouse assets={product.assets}/>
            </div>
          </div> 

          <div className={styles.right}>
            <div className={styles.intro}> 
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.desc} dangerouslySetInnerHTML={{__html: product.description}}></p>
            </div>
            <h1 className={styles.price}>{product.price.formatted_with_symbol}</h1>
            <div className={styles.addToCart}>
              <Quantity props={{quantity,setQuantity}}/>
              <AddToCart id={product.id} quantity={quantity}  />
            </div>
          </div>
        </div>
      ):<></>
      }
    </div>
  );
}

export default Product;