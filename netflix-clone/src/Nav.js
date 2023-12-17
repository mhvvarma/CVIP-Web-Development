import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleShow);

    return () => {
      window.removeEventListener('scroll', handleShow);
    };
  }, []);

  return (
    <div className={`nav ${show ? 'nav_black' : ''}`}>
      <img className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='Netflix Logo'/>
      <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Logo'/>
    </div>
  );
}

export default Nav;