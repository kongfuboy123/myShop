import React from 'react';
import styles from './Sidebar.module.css'
function Sidebar({cates,apiData,setProducts}) {

  const cateFilter = (id)=>{
    const filter = apiData.filter(product =>
      product.categories.map(category =>category.id).includes(id))
    // console.log('filter',filter);
    setProducts(filter);
    
  }
  

  // console.log('cates',cates);
  return (
    <div className={styles.container}>
      <ul className={styles.categories}>
        {cates?(cates.map(cate=>(
           <li key={cate.id} className={styles.mainCate}  >
             <h1  className={styles.mainTitle} onClick={()=>cateFilter(cate.id)} >{cate.name}</h1>

             <ul>
               {cate.children.map(child => (
                 <li key={child.id} className={styles.subCate}>
                   <h1 className={styles.subTitle} onClick={()=>cateFilter(child.id)}>{child.name}</h1>
                 </li>
               ))}
             </ul>
           </li>
        ))
        ):''
      } 
      </ul>
      
    </div>
  );
}

export default Sidebar;