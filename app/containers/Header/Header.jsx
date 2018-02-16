import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <div className="menu">
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/about'>О нас</Link></li>
                    <li><Link to='/news'>Новости</Link></li>
                </ul>
            </div>
        )
    }
}
export default Header;