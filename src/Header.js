import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

const Header = () => {
    const [{basket,user}] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    };

    return(
        <nav className="header"> 
            {/* logo */}
            <Link to="/">
                <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/potato_chips/potato_chips_PNG48.png"
                alt=""/>
            </Link>

            {/* search bar */}
            <div className="header_search">
            <input type="text" className="header_searchInput"/>
            <SearchIcon className="header_searchIcon"/>
            </div>

            {/* 3 Links  + basketicon*/}
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    {/* 文字のためにspan */}
                    <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option1">Hello, {user ? user.email : 'Guest'}</span>
                        <span className="header_option2">{user ? 'Sign Out' : 'Sign In' }</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    {/* 文字のためにspan */}
                    <div className="header_option">
                        <span className="header_option1">Returns</span>
                        <span className="header_option2">&Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    {/* 文字のためにspan */}
                    <div className="header_option">
                        <span className="header_option1">Your</span>
                        <span className="header_option2">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header_link">
                    <div className="header_optionBasket">
                        {/* basket icon */}
                        <ShoppingCartIcon />
                        {/* number */}
                    <span className="header_option2 header_basketCount">{basket?.length}</span>

                    </div>
                
                
                </Link>


             
            

            </div>

            
        </nav>

    )


};

export default Header;