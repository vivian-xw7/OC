import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/logos/OC_logo01.png';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
    </div>
);

export default Header;