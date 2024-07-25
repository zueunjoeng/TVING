import React, { useState, useEffect, useRef } from 'react'
import ft from '../../scss/layout/footer.module.scss';
import { Link } from 'react-router-dom';


function Footer() {
    return (
       <footer className='border-top'>
        <div className='d-flex align-items-center mx-3'>
        <Link to="/">
            <img src="./img/tving logo.png" alt="티빙 로고" />
        </Link>
        <p className={`ms-auto noto20 ${ft.word}`}>고객센터    이용약관    개인정보처리방침    청소년    보호정책    법적고지    이벤트    인재채용</p>
       </div>
       <div className='d-flex align-items-top justify-content-between mx-3'>
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
        <div>
            <p className='text-end noto15'>
            대표이사 : 최주희 | 사업자정보확인 사업자등록번호:188-88-01893 | 통신판매신고번호:2020-서우라포-3641호<br/>
            사업장 : 서울특별시 마포구 상암산로 34, dmc디지털큐브15층 (상암동) | 호스팅신고번호: 씨제이올리브네트웍스(주)<br/>
            고객센터/1:1 게시판 문의: 평일09시-17시/점심시간 13-14시 | 대표메일 tving@cj.net | 전화번호ARS 1670-1525 챗봇/채팅상담연결<br/>
            ENM시청자 상담실(평성문의 및 시청자 의견) 080 -080-0780<br/>
            Mnet 고객센터(방송편성문의) 1855-1631<br/>
            </p>
            <p className='mt-5 mb-3 text-end noto15'>Copyright ©주식회사 티빙 All right reserved.</p>
            
        </div>
       </div>

       </footer>
    )
}

export default Footer
