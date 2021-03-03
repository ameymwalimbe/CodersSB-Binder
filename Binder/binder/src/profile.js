import React from 'react';
import './profile.css';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

function Profile(){
    return(
        <div className ="profCard__cardContainer">
            <div 
            style={{backgroundImage: `url(https://i.ytimg.com/vi/TOEi9Htls5k/maxresdefault.jpg)`}}
            className = "prof"
            >
                <div className = "icon">
                    <AddPhotoAlternateIcon fontSize="large" />
                </div>
                <div className = "example">
                    <h1>Enter Name Here:</h1>
                </div>
            </div>
        </div>
    )
}

export default Profile;