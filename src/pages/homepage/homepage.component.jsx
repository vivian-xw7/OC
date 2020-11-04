import React from 'react';
import MenuItem from '../../components/menu-item/menu-item.component';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <MenuItem />

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> COMMERCIAL </h1>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> NARRATIVE </h1>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> PHOTOGRAPHY </h1>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'> LIVE EVENTS </h1>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;