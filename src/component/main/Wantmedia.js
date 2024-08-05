import React from 'react';
import wantm from '../../scss/layout/wantmedia.module.scss';

function Wantmedia() {
    return (
        <section>
          <div className={wantm.backimg}>
            <div  className='d-flex flex-column justify-content-center align-items-center'>
            <p className='titleText m-0'><span>TVING</span>에서 보고 싶은</p>
            <p className='titleText'>미디어가 있다면?</p>
                <div className={`${wantm.glassmorphism} d-flex flex-column justify-content-center align-items-center text-start`}>
                  <div className="d-flex flex-column justify-content-center text-start">
                      <p className='text mb-3'><img src='./img/quickmenu.png' className={`${wantm.imgsize} me-3`} />어떤 미디어를 보고싶나요? (장르 무관)</p>
                      <div className={`${wantm.mediaform} mb-3 d-flex justify-content-center align-items-center`}>
                          <input type="text" className="d-block w-100" placeholder="보고싶은 미디어를 작성해주세요" />
                      </div>
                      <p className='text'><img src='./img/quickmenu.png' className={`${wantm.imgsize} me-3`} />신청하신 미디어가 업로드 되면 소정의 상품과 함께 알려드릴게요!</p>
                      <p className='text mb-3'>성함과 전화번호를 알려주세요. (작성예시 : 홍길동 / 010-1234-5678)</p>
                      <div className={`${wantm.mediaform} mb-3 d-flex justify-content-center align-items-center`}>
                          <input type="text" className="d-block w-100" placeholder="홍길동 / 010-1234-5678" />
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                          <input type="checkbox" id="consent" className="me-2" />
                          <label htmlFor="consent" className='noto15'>개인정보 수집 동의</label>
                      </div>

                      <div className="d-flex justify-content-center align-items-center">
                          <button type="submit" className="textBtn mt-4">신청하기</button>
                      </div>
                  </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Wantmedia;
