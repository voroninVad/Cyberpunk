import './description.css'
import img1 from './../../img/images/1.png'
import img2 from './../../img/images/2.png'
import img3 from './../../img/images/3.png'

const Description = () => {
    return (  
        <selection className="description">
            <div className="description__content">
                <div className="description__text">
                    <div className="description__title">
                        Найт-Сити изменит тебя навсегда!
                    </div>
                    <div className="description__definition">
                        Cyberpunk 2077 <span>— приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</span>
                    </div>
                </div>
                <div className="description__image">
                    <div className="description__image-column">
                        <img src={img1} alt="1" />
                        <img src={img2} alt="2" />
                    </div>
                    <div className="description__image-block">
                        <img src={img3} alt="3" />
                    </div>
                </div>
            </div>
        </selection>
    );
}
 
export default Description;