import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import quick from '../../scss/layout/quick.module.scss';

function Quick() {
    const [showQuickMenu, setShowQuickMenu] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleScroll = () => {
        if (window.scrollY > 350) {
            setShowQuickMenu(true);
        } else {
            setShowQuickMenu(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showQuickMenu && (
                <aside id={quick.quick} className="pe-5">
                    <div className={`${quick.vimg} mb-3`}>
                        <div className="d-flex ml-n2">
                            <img src="./img/quickmenu.png" alt="Quick Menu" />
                            <ul className={`${quick.ulcls} d-flex bg-white justify-content-center align-items-center`}>
                                <li className='m-0 mx-3'>
                                    <Link className={`d-block ${quick.acls}`} to="chatting">
                                        <i className={`${quick.bi} bi-chat-dots`}></i>
                                    </Link>
                                </li>
                                <li className='m-0 mx-3'>
                                    <Link className={`d-block ${quick.acls}`} to="https://pf.kakao.com/_xjxnUxkT" target='_blank'>
                                        <img src="./img/kakaoimg.png" alt="Kakao" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link to="" className="d-block" onClick={scrollToTop}>
                        <i className={`${quick.bi} bi-arrow-up ${quick.icls} d-flex justify-content-center align-items-center`}></i>
                    </Link>
                </aside>
            )}
        </>
    );
}

export default Quick;