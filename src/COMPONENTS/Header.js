import React from 'react';
import PropTypes from 'prop-types';
import '../COMPONENTS/Header.css';

function Header(props) {
    return (
        <div className='Header-Container'>
            <h1 className='Header-Title'> <span>Hello </span> <span> World</span></h1>
            
        </div>
    );
}

export default Header;