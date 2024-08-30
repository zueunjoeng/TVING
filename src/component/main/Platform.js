import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'; 
import 'swiper/css/effect-coverflow';
import { Link } from 'react-router-dom';

import platdb from '../../data/platformDB.json'
import {Platdiv, Containdiv, Slidediv, Imgdiv } from '../../commonui/platformui'
import platf from '../../scss/layout/platform.module.scss'



function Platform({cls, ea, btn}) {
    return (
        <section>
            <div className={platf.backimg}>
            <p className='titleText mb-0'><span className='me-2'>NO. 1</span> K-CONTENTS PLATFORM </p>
            <p className='hashTitle_platf mb-5'># 티빙오리지널 #드라마 #예능 #영화 #kbo리그</p>
        <Platdiv>       
            <Containdiv>
                <Swiper
                    className={cls}
                    loop={true}
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={ea}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    autoplay={{
                        delay: 10000, 
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,EffectCoverflow]} // 모듈 추가
                >
             
                    
                    {
                        platdb.pf_swiper.map((e, i) => (
                            <SwiperSlide key={i}>
                                <Slidediv>
                                    <Imgdiv src={e.src} alt={e.alt} />
                                </Slidediv>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
           </Containdiv>
        </Platdiv>
        <p className={platf.titlesub}><span>오직 티빙에서만 </span></p>
        <p className={platf.titlesub}>무제한으로 스트리밍해 보세요.</p>
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Link to='/moremedia' className={btn}>티빙 스트리밍</Link>
        </div>
        </div>
        </section>
    );
}

export default Platform;