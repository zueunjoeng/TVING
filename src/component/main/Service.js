import React from 'react'
import service from '../../scss/layout/service.module.scss'
import { Link } from 'react-router-dom';

function Service(){
    return (
        // hover를 글자가 아닌 부모div로 옮겨주기
        <section>
        <p className='titleText'><span>TVING</span> 구독 서비스</p>
        <div className='container'>
        <div className='d-flex justify-content-between align-items-center noto40 mb-5'>
            <p className={`me-5 ${service.subs}`}>광고형 스텐다드</p>
            <span className='text'>·········    동시시청 2대  ㅣ 콘텐츠 다운로드 15회</span>
            <span className={`noto40 ${service.submoney}`}>·········   월 5,500원</span>
        </div>
        <div className='d-flex justify-content-between align-items-center noto40 mb-5'>
            <p className={`me-4 ${service.sub_s}`}>스텐다드</p>
            <span className='text'>··················   동시시청 2대  ㅣ  콘텐츠 다운로드 300회</span>
            <span className={`noto40 ${service.submoney}`}>·········   월 13,500원</span>
        </div>
        <div className='d-flex justify-content-between align-items-center noto40 mb-5'>
            <p className={`me-3 ${service.subs}`}>프리미엄</p>
            <span className='text'>···························   동시시청 4대  ㅣ  콘텐츠 다운로드 400회</span>
            <span className={`noto40 ${service.submoney}`}>·········   월 17,000원</span>
        </div>
        <div className='d-flex justify-content-center align-items-center mt-5'>
            <Link to='/servicesub' className='textBtn mt-3'>구독 신청하기</Link>
        </div>
        </div>
       </section>
    )
}

export default Service