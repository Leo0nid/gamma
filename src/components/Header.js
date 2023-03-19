import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = ({ setIsShown }) => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header__wrapper'>
                    <NavLink to="/" className='header__logo'>
                        <img className='logo__gamma' src="https://gamma-sport.org/wp-content/themes/gamma-sport/img/brand-logo.png" />
                    </NavLink>
                    <nav className='header__nav'>
                        {/* <NavLink to="/" className='header__link'>Главная</NavLink> */}
                        <NavLink to="/federation" className='header__link'>Федерация</NavLink>
                        <NavLink to="/events" className='header__link'>Турниры</NavLink>
                        <NavLink to="/fighters" className='header__link'>Спортсмены</NavLink>
                        <NavLink to="/couches" className='header__link'>Тренеры</NavLink>
                        <NavLink to="/news" className='header__link'>Новости</NavLink>
                        <NavLink to="/online_store" className='header__link'>Магазин</NavLink>
                        {/* <NavLink to="/donate" className="header__link">Донат</NavLink> */}
                        <button className='header__link ' onClick={() => setIsShown((prev) => !prev)}>
                            Донат
                        </button>
                    </nav>


                </div>
            </div>
        </header>
    )
}

export default Header