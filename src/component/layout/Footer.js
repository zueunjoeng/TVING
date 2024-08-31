import React, { useState, useEffect, useRef } from 'react'
import ft from '../../scss/layout/footer.module.scss';
import { Link } from 'react-router-dom';


function Footer() {
    return (
       <footer className={`border-top ${ft.footer} d-flex justify-content-between px-5`}>
        <div className='d-flex flex-column'>
            <div>
                    <Link to="/">
                        <img src="./img/tving logo.png" alt="티빙 로고" />
                    </Link>
            </div>
            <div>
            <Link to="https://www.youtube.com/c/TVING_official" target='_blank'>
                <i class={`${ft.bi} bi-youtube`}></i>
            </Link>
            <Link to="https://www.instagram.com/tving.official/" target='_blank'>
                <i class={`${ft.bi} bi-instagram`}></i>
            </Link>
            <Link to="https://x.com/tvingdotcom" target='_blank'>
                <i class={`${ft.bi} bi-twitter-x`}></i>
            </Link>
            <Link to="https://www.facebook.com/CJTVING/?locale=ko_KR" target='_blank'>
                <i class={`${ft.bi} bi-facebook`}></i>
            </Link>
            </div>
            
        </div>
        <div className='d-flex flex-column mt-4'>
        <p className={`noto20 ${ft.word}`}>
                <Link to="/customer-service" className='text-white'>고객센터</Link>
                {' '}
                <Link to="/terms-of-service" className='text-white'>이용약관</Link>
                {' '}
                <Link to="/privacy-policy" className='text-white'>개인정보처리방침</Link>
                {' '}
                <Link to="/youth-protection-policy" className='text-white'>청소년보호정책</Link>
                {' '}
                <Link to="/legal-notice" className='text-white'>법적고지</Link>
                {' '}
                <Link to="/events" className='text-white'>이벤트</Link>
                {' '}
                <Link to="/careers"className='text-white'>인재채용</Link>
            </p>
            <div className='pt-4'>
                <p className={`text-end noto15 ${ft.footerinfo}`}>
                대표이사 : 최주희 | 사업자정보확인 사업자등록번호:188-88-01893 | 통신판매신고번호:2020-서우라포-3641호<br/>
                사업장 : 서울특별시 마포구 상암산로 34, dmc디지털큐브15층 (상암동) | 호스팅신고번호: 씨제이올리브네트웍스(주)<br/>
                고객센터/1:1 게시판 문의: 평일09시-17시/점심시간 13-14시 | 대표메일 tving@cj.net | 전화번호ARS 1670-1525 챗봇/채팅상담연결<br/>
                ENM시청자 상담실(평성문의 및 시청자 의견) 080 -080-0780<br/>
                Mnet 고객센터(방송편성문의) 1855-1631<br/>
                </p>
                <p className={`mt-3 mb-3 text-end noto15 ${ft.footerinfo}`}>Copyright ©주식회사 티빙 All right reserved.</p>
                
            </div>
        </div>

       </footer>
    )
}

export default Footer
