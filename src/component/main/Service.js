import React from 'react'
import service from '../../scss/layout/service.module.scss'
import { Link } from 'react-router-dom';

function Service({btn}){
    return (
        <section>
        <p className='titleText'><span>TVING</span> 구독 서비스</p>
            <div className='container d-flex flex-column justify-content-center align-items-start'>
                <ul className='d-flex justify-content-evenly mt-3'>
                    <li className={`d-flex align-items-center justify-content-between noto40 ${service.adv}`}>
                        <p>광고형 스텐다드</p>
                        <span className={`noto40 ${service.submoney}`}>·········   월 5,500원</span>
                    </li>
                    <li className={`text d-flex align-items-center ms-5 ${service.adv_text}`}>·······    동시시청 2대  ㅣ 콘텐츠 다운로드 15회</li>
                </ul>
                <ul className='d-flex justify-content-evenly mt-3'>
                    <li className={`d-flex align-items-center justify-content-between noto40 ${service.stan}`}>
                        <p>스텐다드</p>
                        <span className={`noto40 ${service.submoney}`}>·········   월 13,500원</span> 
                    </li> 
                    <li className={`text d-flex align-items-center ms-5 ${service.stan_text}`}>·········   동시시청 2대  ㅣ  콘텐츠 다운로드 300회</li>
                </ul>
                <ul className='d-flex justify-content-evenly mt-3'>
                    <li className={`d-flex align-items-center justify-content-between noto40 ${service.pre}`}>
                        <p>프리미엄</p>
                        <span className={`noto40 ${service.submoney}`}>·········   월 17,000원</span>
                    </li>
                    <li className={`text d-flex align-items-center ms-5 ${service.pre_text}`}>·········   동시시청 4대  ㅣ  콘텐츠 다운로드 400회</li>  
                </ul>
            </div>
        <div className='d-flex justify-content-center align-items-center mt-sm-5 mt-4'>
                <Link to='/servicesub' className={btn}>구독 신청하기</Link>
        </div>
       </section>
    )
}

export default Service