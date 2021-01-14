import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { AiOutlineUser, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}, dispatch] = useStateValue();
    console.log("my basket",basket)

    return (
        <nav className="header">
            <Link to="/header" className="header__link">
                <span className="header__optionLine">Metastore</span>
            </Link>
            <div className="header__search">
                <input type="text" className="header__searchInput"></input>
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <AiOutlineUser></AiOutlineUser>
                    </div>
                </Link>
            </div>
                <Link to="/carrinho" className="header__link">
                    <div className="header__optionBasket">
                        <AiOutlineShoppingCart></AiOutlineShoppingCart>
                      <span className="header_optionLineTwo header__productCount">{basket?.length}</span>
                    </div>
                </Link>
        </nav>
    )
}

export default Header;