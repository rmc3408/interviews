import React from 'react'
import { Toast } from 'flowbite-react'

export default function GenericToast({ info }) {
    let message = ''

    switch (info) {
        case 'success':
            message = 'login successful'
            break
        case 'error':
            message = 'Invalid login credentials'
            break
        default:
          message = 'User must login!'
          break
    }

    return (
        <>
            <Toast>
                <div className='ml-2 text-base font-normal'>{message}</div>
                <Toast.Toggle />
            </Toast>
        </>
    )
}
