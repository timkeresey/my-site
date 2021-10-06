import './Menu.scss';

import menu from '../../assets/images/menu.png';

const Menu = () => {
    
    return (
        <div className="menu">
            <div className="menu__icon-container">
                <img src={menu} alt="menu icon" className="menu__icon" />
            </div>
        </div>
    )
}

export default Menu;
