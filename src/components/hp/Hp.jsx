import './hp.css'
import monit from './../../img/images/monitor.png'
import logoHp from './../../img/images/hp_logo.svg'
import log_x_log from './../../img/images/logo_x_logo.svg'
import logo_cyber from './../../img/images/cyberounk_logo.png'
import paint from './../../img/icons/paints.svg'
import star from './../../img/icons/star.svg'
import smooth from './../../img/icons/smooth.svg'

const Hp = () => {
    return (  
        <selection className="hp">
            <div className="hp__content">
                <div className="hp__img-hp">
                    <div className="hp__image">
                        <img src={monit} alt="monitor hp" />
                    </div>
                    <div className="hp__hp-cyberpunk">
                        <img src={logoHp} className='logoHp' alt="hp" />
                        <img src={log_x_log} className='log_x_log' alt="x" />
                        <img src={logo_cyber} className='logo_cyber' alt="cyberpunk" />
                    </div>
                </div>
                <div className="hp__text">
                    <div className="hp__title">Полное погружение вместе с HP</div>
                    <div className="hp__desc">
                    Погрузись в современные экшен-игры с реалистичным изображением с 
                    помощью монитора с диагональю 23,8 дюйма, созданном для 
                    отображения максимально насыщенных цветов. Успевай реагировать 
                    на любые события с временем отклика 1 мс и частотой в 144 Гц!
                    </div>
                    <div className="hp__points">
                        <ul>
                            <li><img src={paint} alt="" /> Яркие насыщенные цвета</li>
                            <li><img src={star} alt="" /> Кристальная четкость изображения</li>
                            <li><img src={smooth} alt="" /> Быстрые движения и плавный геймплей</li>
                        </ul>
                    </div>
                    <div className="hp__btn">
                        <a href="#!">
                            Подробнее
                        </a>
                    </div>
                </div>
            </div>
        </selection>
    );
}
 
export default Hp;