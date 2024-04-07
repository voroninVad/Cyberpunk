import './header.css'
import logoImg from './../../img/images/cyberounk_logo.png'
import yb from './../../img/socials/youtube-logo.svg'
import vk from './../../img/socials/vk-logo.svg'
import fb from './../../img/socials/facebook-logo.svg'
import tw from './../../img/socials/twitter-logo.svg'
import tch from './../../img/socials/twitch-logo.svg'
import inst from './../../img/socials/instagram-logo.svg'


import slide1 from './../../img/images/slide1.jpg'
import slide2 from './../../img/images/slide2.png'
import slide3 from './../../img/images/slide3.jpg'

const Header = () => {
    return ( 
        <header className='header'>
            <div className="header__content">
                <div className="header__logo">
                    <img src={logoImg} alt="" />
                </div>
                <div className="header__socials">
                    <img src={yb} alt="" />
                    <img src={vk} alt="" />
                    <img src={fb} alt="" />
                    <img src={tw} alt="" />
                    <img src={tch} alt="" />
                    <img src={inst} alt="" />
                </div>
            </div>
            <div className="header__available">
                <div className="header__available-title">
                    Доступно на всех платформах
                </div>
                <div className="header__btn">
                    <a href="#!">Узнать больше</a>
                </div>
            </div>
        </header>
    );
}
 
export default Header;