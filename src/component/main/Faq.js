import React, { useState } from 'react';
import faq from '../../scss/layout/faq.module.scss'; // CSS 모듈 가져오기
import faqlistData from '../../data/faqDB.json'; // 데이터 가져오기

// FAQ 컴포넌트
function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0); // 활성화된 카테고리 인덱스
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null); // 활성화된 질문 인덱스

    const handleCategoryClick = function(index) {
        setActiveIndex(index); // 클릭된 카테고리로 인덱스 업데이트
        setActiveQuestionIndex(null); // 카테고리 변경 시 질문 인덱스 초기화
    };

    const handleQuestionClick = function(index) {
        setActiveQuestionIndex(activeQuestionIndex === index ? null : index); // 질문 클릭 시 인덱스 토글
    };

    const faqlist = faqlistData.faqlist; // JSON 데이터에서 faqlist 추출

    return (
        <section>
            <p className="titleText">FAQ</p>
            <div id="faq-categories" className="d-flex justify-content-center mb-5">
                {faqlist.map((item, index) => (
                    <button
                        key={index}
                        className={`${faq.faqCategory} ${activeIndex === index ? faq.on : ''}`} // 활성화된 카테고리에 'on' 클래스 추가
                        onClick={() => handleCategoryClick(index)} // 클릭 이벤트 핸들러
                        data-index={index} // data-index 속성 추가
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className={faq.faq_content}>
                {faqlist[activeIndex].list.map((faqItem, idx) => (
                    <div key={idx} className='container hashtitle mb-3 d-flex flex-column justify-content-between'>
                        <p onClick={() => handleQuestionClick(idx)} className={`${faq.faqItem} d-flex justify-content-between align-items-center`}>
                            {faqItem.question} {/* question 속성 사용 */}
                            {activeQuestionIndex === idx ? (
                                <i className="bi bi-chevron-up"></i>
                            ) : (
                                <i className="bi bi-chevron-down"></i>
                            )}
                        </p>
                        {activeQuestionIndex === idx && (
                            <div className='d-flex flex-column text-start border-bottom border-white'>
                                {faqItem.answer.split('\n').map((line, index) => (
                                    <div className='mb-3'>
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
