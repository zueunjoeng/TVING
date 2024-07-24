import React, { useState, useEffect, useRef } from 'react'
import ft from '../../scss/layout/footer.module.scss';
import { Link } from 'react-router-dom';


function Footer() {
    return (
       <footer className='border-top'>
        <div className='d-flex align-items-center'>
        <Link to="/">
            <img src="./img/tving logo.png" alt="티빙 로고" />
        </Link>
        <p className='ms-auto'>고객센터    이용약관    개인정보처리방침    청소년    보호정책    법적고지    이벤트    인재채용</p>
       </div>
       </footer>
    )
}

export default Footer
