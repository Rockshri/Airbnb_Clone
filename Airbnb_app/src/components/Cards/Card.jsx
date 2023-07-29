import React from 'react'
import "./card.css";
import cardList from "../../assets/cardlist-links";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { Navigation, Pagination } from 'swiper/modules';
import { Navigation, Pagination} from "swiper/modules";
const Card = () => {
  return (
    <div className='card-container'>
        {cardList.map((data)=>{
            return <div className="card">
            <div className="photo-container"> 
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              mousewheel={true}
              cssMode={true}
            //   Pagination={true}
              navigation={true}
            //   Navigation={true}
            modules={[Navigation, Pagination]}
              className="swiper-container" >
              {data.imgSrc.map((src,i)=>{
                return <SwiperSlide key={i}>
                    <img src={src} alt="loading" className='photo'/>
                </SwiperSlide>
              })}
            </Swiper>
            </div>
            <div className='address-flex'>
                <div>{data.title}</div>
                <div className='hotel-rating'><span class="material-symbols-outlined star">star</span>{data.rating} </div>
            </div>
            <div className='description'>{data.desc}</div>
            <div className='date'>{data.date}</div>
            <div className='rate'><span>{data.price}</span> <span>night</span></div>
        </div>
        })}
    </div>
  )
}

export default Card
