import React, { useState, useEffect, useRef } from 'react'
import mainb from '../../scss/layout/mainbanner.module.scss';
import { Link } from 'react-router-dom';


function Mainbanner() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        console.log('아이디:', username);
        console.log('비밀번호:', password);
        // 여기서 API 요청 등 추가 작업을 수행할 수 있습니다.
    };
    return (
       <section>
            <div className={mainb.mainbanner}>
                <div className="d-flex">
                    <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 me-1 ${mainb.image_right}`}/>
                    <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 ${mainb.image_right}`} />
                </div>
                <div className="d-flex"> 
                    <img src="./img/mainbanner/post02.png" alt="Image 2"  className={`mt-1 me-1 ${mainb.image_left}`}/>
                    <img src="./img/mainbanner/post02.png" alt="Image 2"  className={`mt-1 ${mainb.image_left}`}/>
                </div>
            
            <div className={mainb.overlay}></div>
            <div className='d-flex'>
                <img src="./img/mainbanner/tent.jpg" alt="" className={mainb.maintent}/>
                <img src="./img/mainbanner/tentlogo01.png" alt="" className={mainb.tentlogo}/>
                <div className={`d-flex align-items-center ${mainb.logoinfo}`}>
                    <p className={`${mainb.age}`}>15</p>
                    <span className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>2024</span>
                    <span className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>예능</span>
                    <span className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>tvN</span>
                    <span className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>시즌 4</span>
                </div>
                
                <div className={mainb.tentText}>
                    
                    <p className='noto15 mb-5'>
                    크리에이터 : 홍진주, 김서연<br/>
                    출연 : 라미안, 한가인, 류혜영, 조보아
                    </p>
                    <p className='noto20 mb-3'>
                    잘 봐~ 이번엔 언니들 캠핑이다! <br/>
                    라미란X한가인X조보아X류혜영의 味친 케미
                    </p> 
                    <p className='noto20'>
                    더 와일드하고 더 리얼한 네 배우의 낭만과 궁상 사이, 하이퍼리얼 여행기!
                    </p>
                </div>
                <div className={`${mainb.tentlink} d-flex align-items-center justify-content-center`}>
                <Link to='/Outside.the.Tent.is.Europe' className='textBtn'>시즌 4 : 1화 시청하기<i className={`${mainb.bi} bi-caret-right-fill ms-2`}></i></Link>
                </div>

                <div className={mainb.login}>
                    <div className={mainb.logintxt}><p>당신의 즐거움에<br/> <span>로그인</span> 하세요.</p></div>
                    <div className={mainb.loginform} onSubmit={handleSubmit}>
                        <div className='d-flex flex-column black15'>
                            <label for="username" className='mb-1'>아이디</label>
                            <input 
                        type="text" 
                        id="username" 
                        placeholder="아이디를 입력해주세요"  
                        className='mb-1'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // 입력값 상태 업데이트
                    />
                        </div>
                        <div className='d-flex flex-column black15'>
                            <label for="password" className='mb-1'>비밀번호</label>
                            <input 
                        type="password" 
                        id="password" 
                        placeholder="비밀번호를 입력해주세요" 
                        className='mb-1'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // 입력값 상태 업데이트
                    />
                        </div>
                        <div className='d-flex mt-1 align-items-center'>
                            <p className='me-5 black12'>TVING 계정이 없다면?</p>
                            <Link to="signup" className='black15 text-white'>회원가입</Link>
                        </div>
                        <button type="submit" className={`black15 mt-3 ${mainb.tvinglogin}`}>티빙 로그인</button>
                    </div>

                    <div className={`d-flex flex-column align-items-center justify-content-center mt-3 ${mainb.sublogin}`}>
                        <p>간편 로그인</p>
                        <div className={mainb.logindiv}>
                            <Link to="/google" className='black12'>
                                <img src="./img/loginicon/google.png" alt="" className='me-3'/>GOOGLE 계정으로 로그인
                            </Link>
                        </div>
                        <div className={mainb.logindiv}>
                            <Link to="/naver" className='black12'>
                                <img src="./img/loginicon/naver.png" alt="" className='me-3'/>NAVER 계정으로 로그인
                            </Link>
                        </div>
                        <div className={mainb.logindiv}>
                            <Link to="/kakao" className='black12'>
                                <img src="./img/loginicon/kakaotalk.png" alt="" className='me-3'/>KAKAO 계정으로 로그인
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </section>  
  
    )
}

export default Mainbanner
