import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import platdb from '../../data/platformDB.json'
import {Platsection, Containdiv, Slidediv, Imgdiv } from '../../commonui/platformui'



function Platform() {
    return (
        <Platsection>
                <Swiper
                    loop={true}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]} // 모듈 추가
                >
                    <Containdiv>
                    {
                        platdb.pf_swiper.map((e, i) => (
                            <SwiperSlide key={i}>
                                <Slidediv className="swiper-slide">
                                    <Imgdiv src={e.src} alt={e.alt} />
                                </Slidediv>
                            </SwiperSlide>
                        ))
                    } </Containdiv>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
           
        </Platsection>
    );
}

export default Platform;