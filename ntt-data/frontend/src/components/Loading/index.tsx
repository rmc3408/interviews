import React from 'react'
import { BusyIndicator } from '@ui5/webcomponents-react';
import './loader.scss';

function Loader() {
  return (
    <div className='center-loader'>
      <BusyIndicator
        active
        size="Large"
        className='loader'
      />
    </div>
  )
}

export default Loader