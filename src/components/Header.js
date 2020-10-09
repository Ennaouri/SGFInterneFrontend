import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideocallIcon from '@material-ui/icons/VideoCall';
import NotificationIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
            </div>
            <div className="header__input">
                <input placeholder="Search" type="text" />
                <SearchIcon className="header__inputButton"/> 
            </div>
            <div className="header__icons">
                <VideocallIcon className="header__icon" />
                <NotificationIcon className="header__icon" />
                <Avatar
                    alt="Ennaouri"
                    src="../assets/images/photo.jpg"
                    />
            </div>
            
        </div>
    )
}

export default Header
