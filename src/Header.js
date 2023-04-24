import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './ContextProvider';
import pic from './img/pic.png'
import { auth } from './firebase';


function Header() {
    const [{ cart, user }, dispatch] = useStateValue();
    
    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
          console.log("out")
        }
      }

  return (
    <div className='header'>
       <Link to='/'>
        <img className='header-logo' src={pic} alt='amazon' />
        </Link>
        <div className='header-search'>
            <input className='header-input' type='text' placeholder='Search your Item here...' />
            <SearchIcon className="search-icon"/>
        </div>

        <div className='header-nav'>
          <Link to={!user && '/login'}>
            <div onClick={handleAuthenticaton} className='header-option'>
                <span className='header-option-line1'>Hello {!user ? 'Guest' : user.email}</span>
                <span className='header-option-line2'>{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
          </Link>

            <Link to='/form'>
            <div className='header-option'>
               <span className='header-option-line1'>Sell Your</span>
                <span className='header-option-line2'>Product</span>
                
            </div>
            </Link>
            
            <Link to='/cart'>
            <div className='basket'>
                <ShoppingCartIcon /> 
                <span className='header-option-line2 cart-count'>{cart?.length}</span>  
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header