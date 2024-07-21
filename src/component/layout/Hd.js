import React, { useState, useEffect, useRef } from 'react'
import hd from '../../scss/layout/hd.module.scss';
import { Link } from 'react-router-dom';

function Hd() {
    return (
        <header id="hd">
        <div className={hd.momdiv}>
            <div className={hd.logodiv}>
                <Link to="/">
                    <img src="./img/tving logo.png" alt="티빙 로고" />
                </Link>
            </div>
            <ul className={hd.ulcls}>
            <li className={hd.li01}>
                <Link to="/subscribe" className={`${hd.text} noto20`}>구독하기</Link>
            </li>
            <li className={hd.li02}>
                <Link to="/login"><i className={`${hd.bi} bi-person`}></i></Link>
            </li>
            </ul>
            
        </div>
    </header>
    )
}

export default Hd
