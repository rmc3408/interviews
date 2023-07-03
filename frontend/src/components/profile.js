import React from 'react'
import { Avatar } from 'flowbite-react'
import adminPicture from '../assets/images/admin-profile.png'
import userPicture from '../assets/images/user-profile.png'


function AvatarText({ nome, isAdmin }) {
    return (
        <Avatar img={isAdmin ? adminPicture : userPicture} rounded alt='control_user'>
            <div className='space-y-0 font-medium dark:text-white'>
                <div>{nome}</div>
                <div className='text-xs text-gray-500 dark:text-gray-400'>{isAdmin ? 'ADMIN' : ' USER'}</div>
            </div>
        </Avatar>
    )
}

export default AvatarText
