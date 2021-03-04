import React from 'react';
import './profile.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import IconButton from '@material-ui/core/IconButton';


function Profile(){
    return(
        <div className ="profCard__cardContainer">
            <div 
            /*style={{backgroundImage: `url(https://i.ytimg.com/vi/TOEi9Htls5k/maxresdefault.jpg)`}}*/
            style={{backgroundColor:`pink`}}
            className = "prof"
            >
                <div className = "icon">
                    <IconButton>
                        <AddPhotoAlternateIcon fontSize="large" />
                    </IconButton>
                </div>
                <div className = "example">
                    <h1>Enter Name Here:</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile;