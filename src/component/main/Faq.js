import React, { useState } from 'react';
import faq from '../../scss/layout/faq.module.scss'; // CSS 모듈 가져오기
import faqlistData from '../../data/faqDB.json';

function Faq(props) {
  const [faqmenu, setFaqmenu] = useState(0);

  const qnaclick = (num) => {
    setFaqmenu(num);
  };
  

  const { faqlist } = faqlistData;

  return (
    <section>
      <p className='titleText'>
        FAQ
      </p>
      <div id={props.keynm} className="d-flex flex-wrap flex-row">
        {
          faqlist.map((e, i) => (
            <button
              key={`category${i}`}
              className={`${faq.faqCategory} ${faqmenu === i ? faq.on : ''}`}
              onClick={() => qnaclick(i)}
            >
              {e.name}
            </button>
          ))
        }
      </div>
      <div id="faq_list">
        {
          faqlist[faqmenu].list.split('|').map((v, i) => (
            <p key={`faq-item${i}`}>
              {v}
            </p>
          ))
        }
      </div>
    </section>
    
  );
  
}

export default Faq;

