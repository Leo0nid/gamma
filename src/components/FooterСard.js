import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const FooterСard = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div>
                        <h5 className="footer__subtitle">
                            Федерация
                        </h5>
                        <div >
                            <img className='logo__gamma' src="https://gamma-sport.org/wp-content/themes/gamma-sport/img/brand-logo.png" />
                        </div>

                    </div>

                    <ul className="footer__info">
                        <li className="footer__link">
                            <a href="#">
                                <i className="fa-solid fa-location-dot icon"></i>
                                Боконбаева 32
                            </a>
                        </li>
                        <li className="footer__link">
                            <a href="#">
                                <i className="fa-solid fa-square-phone-flip icon"></i>
                                +996 771 989 898
                            </a>
                        </li>
                        <li className="footer__link">
                            <a href="#">
                                <i className="fa-solid fa-envelope icon"></i>
                                gamma_kg@gmail.com
                            </a>
                        </li>
                    </ul>
                    <ul className="footer__socials">
                        <li className="footer__info-item">
                            <a href="#">
                                <i className="fa-brands fa-facebook sns_icon"></i>
                            </a>
                            <a href='https://instagram.com/gamma_kgz?igshid=YmMyMTA2M2Y='>
                            <i class="fa-brands fa-square-instagram sns_icon"></i>
                            </a>
                            <a href='#'>
                            <i class="fa-brands fa-youtube sns_icon"></i>                
                                        </a>
                        </li>
                        {/* <li className="footer__info-item">
                            <a href="#">
                            <FontAwesomeIcon
                                icon="calendar"
                                    color="red"
                                    size="2x"
                                />
                            </a>
                        </li>
                        <li className="footer__info-item">
                            <a href="#">
                                <i className="fa-brands fa-google"></i>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterСard