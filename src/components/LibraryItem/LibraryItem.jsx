import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';    
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

function LibraryItem() {
    return (
        <div>
            <h3>

            </h3>
            <span></span> <p></p>
            <span></span> <p></p>
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Keyboard, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>  
    </Swiper>
        </div>
    )
}

export default LibraryItem