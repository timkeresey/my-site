import './Menu.scss';

import menu from '../../assets/images/menu.png';

const Menu = () => {
    
    return (
        <div className="menu">
            <img src={menu} alt="menu icon" className="menu__icon" />
        </div>
    )
}

export default Menu;
