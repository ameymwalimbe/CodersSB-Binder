 import React from 'react';
 import "./Header.css";
 import PersonIcon from '@material-ui/icons/Person';
 import TelegramIcon from '@material-ui/icons/Telegram';
 import ImportContactsIcon from '@material-ui/icons/ImportContacts';
 import IconButton from '@material-ui/core/IconButton';


 function Header() {
     return (
         <div className = "header">
             <IconButton>
             <PersonIcon className = "header__icon" fontSize="large"/>
             </IconButton>

            <ImportContactsIcon fontSize="large"/>
            

            <IconButton>
            <TelegramIcon className = "header__icon" fontSize="large"/>
            </IconButton>

         </div>
     )
 }

 export default Header