import React from 'react'
import usersLogo from './../../assets/photo.jpg'
import './ProfilPhoto.css'
const ProfilPhoto = () => {
    return (
        <div className='photocomponent'>
         <img src={usersLogo} alt="users" style={{ margin: "20px" }} />   
        </div>
    )
}

export default ProfilPhoto
