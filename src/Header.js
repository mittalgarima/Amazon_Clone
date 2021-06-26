import React from 'react';
import logo from './logo.png'
import './Header.css';
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
    const [{basket,user},dispatch]=  useStateValue();
    console.log(basket);



    const handleAuthentication =()=>{
     if (user){
         auth.signOut();
     }

    }

     
    return (
       
        <nav className="Header">
        <Link to="/">
        <img  className="Header_logo" src={logo} alt="logo"/>
        </Link>


        <div className="header_search">
     <input type="text" className="header_searchInput"/>
     <SearchIcon className="header_searchIcon"/>
     </div>

     
<div className="header_nav">
     <Link to={ !user && '/login'} className="header_link" >
     <div onclick={handleAuthentication}
      className="header_option">
         <span className="headerOption_line1">Hello Guest</span>
         <span className="headerOption_line2">{user ? 'Sign Out':'Sign In'}</span>
     </div>
     </Link>

     <Link to="/" className="header_link">

     <div className="header_option">
         <span className="headerOption_line1">Returns</span>
         <span className="headerOption_line2">& Orders</span>
     </div>
     </Link>

     <Link to="/" className="header_link">
     <div  className="header_option">
         <span className="headerOption_line1">Your</span>
         <span className="headerOption_line2">Prime</span>
     </div>
     </Link>


     <Link to="/Checkout" className="header_link">
         <div className="header_optionBasket">
         <ShoppingBasketIcon/>
             <span className="headerOption_line2 header_BasketCount">{basket?.length}</span>
         </div>
     </Link>

     </div>

        </nav>
       
    
    )
}

export default Header
