import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';

import platdb from '../../data/platformDB.json'
import {Platdiv, Containdiv, Slidediv, Imgdiv } from '../../commonui/platformui'
import platf from '../../scss/layout/platform.module.scss'



function Platform() {
    return (
        <section>
            <p className='titleText'><span>NO. 1</span> K-CONTENTS PLATFORM </p>
            <p className='hashTitle'># 티빙오리지널 #드라마 #예능 #영화 #kbo리그</p>
        <Platdiv>
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
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{
                        delay: 4000, 
                        disableOnInteraction: false,
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
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </Swiper>
           
        </Platdiv>
        <p className={platf.titlesub}><span>오직 티빙에서만 </span></p>
        <p className={platf.titlesub}>무제한으로 스트리밍해 보세요.</p>
        <Link to='/moremedia' className={platf.tvingstream}>티빙 스트리밍</Link>
        </section>
    );
}

export default Platform;