import React from 'react'
import './title.scss'
import { Title } from '@ui5/webcomponents-react';


function HeaderTitle() {
  return (
    <div className="header">
      <Title level="H1" wrappingType="Normal">Search for a movie in Movie database</Title>
      <p>For more descripiton, enter at least 5 characters to find a movie. It will display few information about movie such as title, description, rating and movie poster.</p>
    </div>
  )
}

export default HeaderTitle