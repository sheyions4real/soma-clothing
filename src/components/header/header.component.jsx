import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.config.utils';

import './header.styles.scss';


const  Header = ({currentUser})=>
(
    <div className="header">
        <Link to='/' className='logo-container'>
            <Logo className='logo'></Logo>
        </Link>

        <div className="options">
            <Link className='option' to="/shop">SHOP</Link>
            <Link className='option' to="/about">ABOUT</Link>
            {
                currentUser ?
                <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> :
                <Link className='option' to='/signIn'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps =( state) =>({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header); // this will modify header to use redux