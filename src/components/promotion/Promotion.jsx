import './promotion.css'
import prom from './../../img/images/promotion.svg'
import ps5 from './../../img/images/playstation_5.png'
import ps5Graff from './../../img/images/playstation_layer.png'
import xbox from './../../img/images/xbox_sx.png'
import xboxGraff from './../../img/images/xbox_sx_layer.png'

const Promotion = () => {
    return (  
        <selection className="promotion">
            <div className="promotion__content">
                <div className="promotion__information">
                    <div className="promotion__title">
                        <img src={prom} alt="promotion" />
                    Играй и выигрывай!
                    </div>
                    <div className="promotion__text">
                    Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль <span>Xbox Series X</span> или <span>Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
                    </div>
                </div>
                <div className="promotion__form-img">
                    <div className="promotion__form">
                        <form action="#!" method="post">
                            <input type="text" name="userName" placeholder='Как тебя зовут?' id="" />
                            <input type="email" name="userEmail" placeholder='Твой e-mail' id="" />
                            <div className="drop-area">
                                <span>Прикрепить скриншот</span>
                                .png / .jpg / .pdf
                            </div>
                            <a href="#!">Отправить</a>    
                            <div className="check">
                                <input type="checkbox" name="sogl"  id="" />
                                Согласен на обработку персональных данных
                            </div>
                        </form>
                    </div>
                </div>
                
                <div className="promotion__image">
                        <img src={xbox} alt="xbox" />
                        <img src={ps5} alt="ps5" />
                    </div>
            </div>
        </selection>
    );
}
 
export default Promotion;