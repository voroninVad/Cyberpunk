import './footer.css'
import logo_cyberpunk from './../../img/images/cyberounk_logo.png'
import CD_Project from './../../img/images/CD_Projekt_logo 1.svg'

const Footer = () => {
    return (  
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo-cd">
                    <img src={logo_cyberpunk} alt="" />
                    <img src={CD_Project} alt="" />
                </div>
                <div className="footer__link">
                    <a href="#!">Лицензия</a>
                    <a href="#!">Политика конфиденциальности</a>
                </div>
            </div>
            <div className="footer__">
            CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
            </div>
        </footer>
    );
}
 
export default Footer;