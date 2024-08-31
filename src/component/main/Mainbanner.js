import React, { useState, useEffect } from 'react';
import mainb from '../../scss/layout/mainbanner.module.scss';
import { Link } from 'react-router-dom';
import loginData from '../../data/mainDB.json'; // JSON 파일 경로

function Mainbanner({btn}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginOptions, setLoginOptions] = useState([]); // 로그인 옵션 상태
    const [logInfo, setLogInfo] = useState([]); // 로그 정보 상태

    useEffect(() => {
        // JSON 파일에서 로그인 옵션과 로그 정보를 불러옵니다.
        setLoginOptions(loginData.loginOptions);
        // logInfo를 split하여 배열로 변환
        setLogInfo(loginData.logInfo.split("|"));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 폼 제출 동작 방지
        console.log('아이디:', username);
        console.log('비밀번호:', password);
        // 여기서 API 요청 등 추가 작업을 수행할 수 있습니다.
    };

    return (
        <section>
            <div className={`${mainb.mainbanner} d-flex flex-column justify-content-center`}>
                <div className='dim position-absolute' >
                    <div className="d-flex">
                        <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 me-1 ${mainb.image_right}`} />
                        <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 ${mainb.image_right}`} />
                    </div>
                    <div className="d-flex">
                        <img src="./img/mainbanner/post02.png" alt="Image 2" className={`mt-1 me-1 ${mainb.image_left}`} />
                        <img src="./img/mainbanner/post02.png" alt="Image 2" className={`mt-1 ${mainb.image_left}`} />
                    </div>
                </div>
               
                <div className='d-flex px-xl-5 mx-xl-5 justify-content-between position-relative zup'>
                    <div className={`${mainb.leftBanner} d-flex align-items-center`}>
                        <img src="./img/mainbanner/tent.jpg" alt="" className={mainb.maintent} />
                   
                        <div className='ps-5'>
                            <img src="./img/mainbanner/tentlogo01.png" alt="" className={mainb.tentlogo} />
                            <div className={` mt-4 ${mainb.logoinfo}`}>
                                <div className='d-flex align-items-center mb-4'>
                                    <p className={`${mainb.age}`}>15</p>
                                    {logInfo.map((info, index) => (
                                        <span key={index} className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>
                                            {info}
                                        </span>
                                    ))}
                                </div>
                        
                                <div>
                                    <p className={`noto15 mb-5 ${mainb.tentText}`}>
                                        크리에이터 : 홍진주, 김서연<br />
                                        출연 : 라미안, 한가인, 류혜영, 조보아
                                    </p>
                                    <p className={`noto20 mb-3 ${mainb.tentText}`}>
                                        잘 봐~ 이번엔 언니들 캠핑이다! <br />
                                        라미란X한가인X조보아X류혜영의 味친 케미
                                    </p>
                                    <p className={`noto20 ${mainb.tentText01}`}>
                                        더 와일드하고 더 리얼한 네 배우의 낭만과 궁상 사이, 하이퍼리얼 여행기!
                                    </p>
                                </div>
                                <div className={`${mainb.tentlink} d-flex align-items-center justify-content-start mt-5`}>
                                    <Link to='/Outside.the.Tent.is.Europe' className={btn}>시즌 4 : 1화 시청하기<i className={`${mainb.bi} bi-chevron-right ms-2`}></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>                    

                    <div className={` ${mainb.login} p-5 `}>
                        <div className={`${mainb.logintxt} mt-5 mb-4`}>
                            <p>당신의 즐거움에<br /> <span>로그인</span> 하세요.</p>
                        </div>
                        <form className={mainb.loginform} onSubmit={handleSubmit}>
                            <div className='d-flex flex-column justify-content-center align-items-center'>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="아이디 입력"
                                    className='mb-3'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} // 입력값 상태 업데이트
                                />
                                
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="비밀번호 입력"
                                    className='mb-1'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // 입력값 상태 업데이트
                                />
                                <button type="submit" className={` mt-3 ${mainb.tvinglogin}`}>티빙 로그인</button>
                            </div>
                            <div className='d-flex ms-2 mt-2 align-items-start'>
                                    <Link to="idpassword" className='noto12 text-white'>아이디 / 비밀번호찾기</Link>
                            </div>
                            
                            <div className='d-flex align-items-center'>
                                <p className='ms-2 me-5 noto12'>TVING 계정이 없다면?</p>
                                <Link to="signup" className='text-white'>회원가입</Link>
                            </div>
                            
                        </form>

                        <div className={`d-flex flex-column align-items-center justify-content-center mt-5 ${mainb.sublogin}`}>
                            <p className='d-flex align-items-center mb-2'>
                                <span className={`${mainb.simplelogin} me-2`}></span>
                                간편 로그인
                                <span className={`${mainb.simplelogin} ms-2`}></span>
                            </p>
                            <div className='d-flex '>
                                {loginOptions.map((option, index) => (
                                    <div className={mainb.logindiv} key={index}>
                                        <Link to={option.link} className='black12'>
                                            <img src={option.icon} alt={`${option.name} 아이콘`} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Mainbanner;
