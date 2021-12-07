import React,{useState,useEffect} from 'react';
import commerce from '../../lib/commerce'
import ProductList from '../../components/ProductList'
import Sidebar from '../../components/Sidebar'
import styles from './index.module.css'
function Products({apiData,apiCategories}) {


  const [products,setProducts] = useState()
 
  const [categories,setCategories]=useState()

  useEffect(() => {
    setProducts(apiData)
    if(apiCategories.length > 0) {
      const cate = apiCategories.filter(categories => categories.slug!=='types')
      console.log('cate',cate);
      setCategories(cate)
    }
  }, [apiData,apiCategories])
 
  return (

      <div className={styles.container}>
        
         <div className={styles.left}>
          <Sidebar cates={categories} setProducts={setProducts} apiData={apiData} />
         </div>

         <div className={styles.right}>
           <ProductList products={products}  />
        </div>
       
       </div>
      
   
  );
}

export default Products;