import React from 'react'
import "./MyrestaurantMainBody.css"

//components
import IntroPageSeccion1 from '../IntroPageSeccion1/IntroPageSeccion1'
import IntroPageSeccion2 from '../IntroPageSeccion2/IntroPageSeccion2'
import IntroPageSeccion3 from '../IntroPageSeccion3/IntroPageSeccion3'

function MyrestaurantMainBody() {
  return (
    <div id='myrestaurantMainBodyContainer'>
        <div id='myrestaurantMainBodySeccion1'>
          <IntroPageSeccion1/>
        </div>
        <div id='myrestaurantMainBodySeccion2'>
          <IntroPageSeccion2/>
        </div>
        <div id='myrestaurantMainBodySeccion3'>
          <IntroPageSeccion3 />
        </div>
    </div>
  )
}

export default MyrestaurantMainBody