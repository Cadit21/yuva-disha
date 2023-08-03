import React, { useState, useEffect } from 'react';
import './Nv.css';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Subscribe to changes in authentication state
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is logged in.');
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleonclick = async()=>{
  try {
    await signOut(auth);
    console.log('User logged out successfully.');
  } catch (error) {
    console.error('Error logging out:', error);
  }
};
  

  return (
    <nav>
      <div className='nav'>
        <div className='left'>
          <Link to='/'>
            <img
              src='https://yuvadisha.bizjunket.co.nz/wp-content/uploads/2023/05/logo.png'
              alt='Yuva Disha Logo'
            />
          </Link>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/founding-members'>Founding Members</Link>
            </li>
            <li>
              <Link to='/samarth'>Samarth</Link>
            </li>
            <li>
              <Link to='/abhilashi'>Abhilashi</Link>
            </li>
            <li>
              <Link to='/packages'>Packages</Link>
            </li>
            <li>
              <Link to='/pages'>Pages</Link>
            </li>
            <li>
              <Link to='/Dashboard'>Dashboards</Link>
            </li>
          </ul>
        </div>
        <div className='right'>
          {loggedIn ? (
            <>
              <li>My Profile</li>
              <li onClick={handleonclick}>Log Out</li>
              </>
            
          ) : (
            <>
              <Link to='/register'>
                <li>Register</li>
              </Link>
              <Link to='/signin'>
                <li>SignIn</li>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
