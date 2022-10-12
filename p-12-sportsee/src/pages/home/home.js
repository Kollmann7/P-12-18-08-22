import React from 'react'
import Header from '../../components/header/header'
import SideBar from '../../components/sidebar/sidebar'
import { Link } from 'react-router-dom'
import './home.css'

/**
  * This function will display the home page 
  * @return {ReactElement} - Display the home page 
  */
function Home() {
  return (
    <div>
      <Header />
          <div className='user-wrapper'>
            <Link to="/user/12">
              <div className='user-display'>user 12</div>
            </Link>
            <Link to="/user/18">
              <div className='user-display'>user 18</div>
            </Link>
          </div>
      <SideBar />
    </div>
  )
}

export default Home
