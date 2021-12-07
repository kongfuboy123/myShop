import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import styles from './SwiperC.module.css'
import img1 from '../../assets/img/jew/1.jpg'
import img2 from '../../assets/img/jew/2.jpg'
import img3 from '../../assets/img/jew/3.jpg'
const SwiperC =() => {
  return (
    <div className={styles.container}>
    
        <Link to='/products' className={styles.shopnow}>
          <div className={styles.title}>
            Shop Now
          </div>
        </Link> 
      
      <Carousel autoPlay infiniteLoop showArrows={true} interval={2000} showStatus={false} showThumbs={false} className={styles.swiper}>
          <div className={styles.slide }>
              <img src={img1} className={styles.img } />
            
          </div>
          <div className={styles.slide }>
              <img src={img2} className={styles.img }/>
             
          </div>
          <div className={styles.slide }>
              <img src={img3} className={styles.img }/>

          </div>
      </Carousel>
    </div>
  )
};
export default SwiperC;



