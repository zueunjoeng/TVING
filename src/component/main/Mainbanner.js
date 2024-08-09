import React, { useState, useEffect } from 'react';
import mainb from '../../scss/layout/mainbanner.module.scss';
import { Link } from 'react-router-dom';
import loginData from '../../data/mainDB.json'; // JSON 파일 경로

function Mainbanner() {
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
            <div className={mainb.mainbanner}>
                <div className='container'>
                    <div className="d-flex">
                        <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 me-1 ${mainb.image_right}`} />
                        <img src="./img/mainbanner/post01.png" alt="Image 1" className={`mt-1 ${mainb.image_right}`} />
                    </div>
                    <div className="d-flex">
                        <img src="./img/mainbanner/post02.png" alt="Image 2" className={`mt-1 me-1 ${mainb.image_left}`} />
                        <img src="./img/mainbanner/post02.png" alt="Image 2" className={`mt-1 me-1 ${mainb.image_left}`} />
                        <img src="./img/mainbanner/post02.png" alt="Image 2" className={`mt-1 ${mainb.image_left}`} />
                    </div>
                </div>
                <div className={mainb.overlay}></div>
                <div className='d-flex container'>
                    <img src="./img/mainbanner/tent.jpg" alt="" className={mainb.maintent} />
                    <img src="./img/mainbanner/tentlogo01.png" alt="" className={mainb.tentlogo} />
                    <div className={`d-flex align-items-center ${mainb.logoinfo}`}>
                        <p className={`${mainb.age}`}>15</p>
                        {logInfo.map((info, index) => (
                            <span key={index} className={`ms-2 noto15 d-flex align-items-center justify-content-center ${mainb.logounder}`}>
                                {info}
                            </span>
                        ))}
                    </div>

                    <div className={mainb.tentText}>
                        <p className='noto15 mb-5'>
                            크리에이터 : 홍진주, 김서연<br />
                            출연 : 라미안, 한가인, 류혜영, 조보아
                        </p>
                        <p className='noto20 mb-3'>
                            잘 봐~ 이번엔 언니들 캠핑이다! <br />
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
                        <div className={mainb.logintxt}><p>당신의 즐거움에<br /> <span>로그인</span> 하세요.</p></div>
                        <form className={mainb.loginform} onSubmit={handleSubmit}>
                            <div className='d-flex flex-column black15'>
                                <label htmlFor="username" className='ms-2 mb-1'>아이디</label>
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
                                <label htmlFor="password" className='ms-2 mb-1'>비밀번호</label>
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
                                <Link to="idpassword" className='ms-2 black12 text-white'>아이디/비밀번호찾기</Link>
                            </div>
                            <div className='d-flex mt-1 align-items-center'>
                                <p className='ms-2 me-5 black12'>TVING 계정이 없다면?</p>
                                <Link to="signup" className='black15 text-white'>회원가입</Link>
                            </div>
                            <button type="submit" className={`black15 mt-3 ${mainb.tvinglogin}`}>티빙 로그인</button>
                        </form>

                        <div className={`d-flex flex-column align-items-center justify-content-center mt-3 ${mainb.sublogin}`}>
                            <p className='d-flex align-items-center'><span className={`${mainb.simplelogin} me-2`}></span>간편 로그인<span className={`${mainb.simplelogin} ms-2`}></span></p>
                            <div className='d-flex w-50'>
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
