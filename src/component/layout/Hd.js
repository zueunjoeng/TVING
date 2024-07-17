import React, { useState, useEffect, useRef } from 'react'
import hd from '../../scss/layout/hd.module.scss';


function Hd() {
    return (
        <header id="hd">
        <div className={hd.momdiv}>
            <div className={hd.logodiv}><img src="./img/tving logo.png" alt="" />
            </div>
            
            <ul className={hd.ulcls}>
                <li className={hd.li01}><a href="" className={`${hd.text} noto20`}>구독하기</a></li>
                <li className={hd.li02}><a href=""><i className={`${hd.bi} bi-person`}></i></a></li>
            </ul>
            
        </div>
    </header>
    )
}

export default Hd
