import React, {useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { IconButton } from '@material-ui/core';

const Header = () => {
    const [{basket, user}, dispatch] = useStateValue();
    const [toggle, setToggle] = useState(false);
    const [input, setInput] = useState("");

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    };

    const toggleHandler = () => {
        if(toggle===false){
            setToggle(true);
            console.log(toggle);
        }else{
            setToggle(false);
            console.log(toggle);
        }
        
    }

    const textHandler = (e) => {
        
        if(e.target.value===null){
            dispatch({
                type: 'DELETE_SEARCHED_WORD',
            });
        }else {
            setInput(e.target.value);
        }

    }

    const searchedWordHandler = (e) => {
        // e.preventDefault();
        dispatch({
            type: 'SET_SEARCHED_WORD',
            searchedWord: input,
        });
        console.log(input);
        setInput("");
    };

    return(
        <nav className={`header ${toggle && "header_active"}`}> 
            {/* logo */}
            <Link to="/">
                <img 
                className="header_logo" 
                src="http://pngimg.com/uploads/potato_chips/potato_chips_PNG48.png"
                alt=""/>
            </Link>

            {/* search bar */}
            <div className="header_search">
            <input type="text" className="header_searchInput" onChange={textHandler}/>
            <IconButton className="header_searchIcon" disabled={!input} variant="contained" color="default" type="submit" onClick={searchedWordHandler} >
            <SearchIcon className="header_searchIconContent" />
            </IconButton>
            </div>
          

            {/* 3 Links  + basketicon*/}
            <div className={`header_nav  ${toggle && "header_nav_active"}`}>
                <Link to="/login" className="header_link">
                    {/* 文字のためにspan */}
                    <div onClick={handleAuthentication} className="header_option">
                    <span className="header_option1">Hello, {user ? user.email : 'Guest'}</span>
                        <span className="header_option2">{user ? 'Sign Out' : 'Sign In' }</span>
                    </div>
                </Link>

                <Link to="/orders" className="header_link">
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

            {/* toggle humburger */}
            <div onClick={toggleHandler} className="header_toggle">
                <div className="header_toggleLine1"></div>
                <div className="header_toggleLine2"></div>
                <div className="header_toggleLine3"></div>
            </div>

            
        </nav>

    )


};

export default Header;