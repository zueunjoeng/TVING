import React, { useEffect } from 'react';
import watching from '../../scss/layout/watching.module.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Watching() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간
    });
  }, []);

  return (
    <section >      
      <p className='titleText'>
        내가 원하는 기기로 자유롭게<br />언제 어디서든 본방사수!
      </p>
      <div className={watching.backimg}>
        <div className='container d-flex'>
          <div className='col-5 d-flex flex-column justify-content-center' data-aos="fade-up">
            <img src="/img/consoleimg/pcmedia.png" alt="PC Media" />
            <p className='hashTitle mt-4'>
              #스마트폰 #테블릿 #PC #TV<br />
              #최대 <span className={watching.txt}>4인 멀티 프로필</span>
            </p>
          </div>
          <div className='col-2'></div>
          <div className='col-5 d-flex flex-column justify-content-center' data-aos="fade-up">
            <img src="/img/consoleimg/scence.png" alt="Scene" />
            <p className='hashTitle mt-4'>
              #<span className={watching.txt}>Quick VOD</span><br />
              #놓친 방송은 타임머신으로 다시보기!
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Watching;