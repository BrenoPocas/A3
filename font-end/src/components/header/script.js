import './styles.css'
import close_white_36dp from './img/close_white_36dp.svg'
import menu_white_36dp from './img/menu_white_36dp.svg'


function menuShow() {
    let menuMobile = document.querySelector('.mobile_menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src={menu_white_36dp};
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src={close_white_36dp};
    }
}