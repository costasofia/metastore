import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="header">
            <Link to="/header" className="header__link">
                <span className="header__optionLine">Metastore</span>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon classeName="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/produto" className="header__link">
                    <div className="header__option">
                        <AiOutlineUser classeName="header__searchIcon"></AiOutlineUser>
                    </div>
                </Link>
                <Link to="/checkout" className="header__link">
                    <div className="header__option">
                        <AiOutlineShoppingCart classeName="header__searchIcon"></AiOutlineShoppingCart>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;