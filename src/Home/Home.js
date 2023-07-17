import React from 'react'
import "../css/home.css"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <nav>
        <ul>
            <li>Home</li>
            
            <li>
            <Link to="/">About</Link>
            </li>
            <li>
            <Link to="/user">User</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
            </li>

        </ul>
      </nav>
    </div>
  )
}

export default Home
