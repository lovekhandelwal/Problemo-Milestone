import React from 'react'
import QuoraBox from './QuoraBox';
import './css/Feed.css';
import Poost from './Poost';


function Feed() {
  return (
    <div className='feed'>
        <QuoraBox />
        <Poost />
        <Poost />
        <Poost />
        <Poost />
        <Poost />
    </div>
  )
}

export default Feed