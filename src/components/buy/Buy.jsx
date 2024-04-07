import './buy.css'
import buy_logo from './../../img/images/buy.png'

import disk from './../../img/icons/disk.png'
import direct from './../../img/icons/directory_of_information.svg'
import case_code from './../../img/icons/case_with_code.svg'

import PC from './../../img/icons/PC.svg'
import XBOX from './../../img/icons/xbox_one_icon.svg'
import STADIA from './../../img/icons/stadia_logo.svg'
import PS4 from './../../img/icons/playstation_ps4_logo.svg'



const Buy = () => {
    return (  
        <selection className="buy">
            <div className="buy__content">
                <div className="buy__buy-logo">
                    <img src={buy_logo} alt="" />
                </div>
                <div className="buy__text">
                    <div className="buy__title">Купить игру Cyberpunk 2077</div>
                    <div className="buy__parag1-points">
                        <span>В комплект входит:</span>
                        <ul>
                            <li><img src={disk} alt="" /> Футляр с игровыми дисками</li>
                            <li><img src={case_code} alt="" /> Футляр с кодом для загрузки игры и дисками (pc)</li>
                            <li><img src={direct} alt="" /> Справочник с информацией об игровом мире</li>
                        </ul>
                    </div>
                    <div className="buy__parag2-image">
                        <span>Выберите платформу:</span>
                        <div className="buy__image-lines">
                            <div className="image-line buy__image-line1">
                                <img src={PC} alt="" />
                                <img src={STADIA} className='stadia' alt="" />
                            </div>
                            <div className="image-line buy__image-line2">
                                <img src={XBOX} alt="" />
                                <img src={PS4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </selection>
    );
}
 
export default Buy;