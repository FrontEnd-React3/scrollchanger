import React, { useState, useEffect } from 'react'; 
import { debounce } from './helpers';  


const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [visible, setVisible] = useState(true);  

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible((prevScrollPos < currentScrollPos && prevScrollPos - currentScrollPos < 0) || currentScrollPos < 30);
    //bij naar bovenscrollen: toon navbar in bovenste 100 pixels hoogte homesectie van top en 30 hoogte navbar
    console.log("currentScrollPos  " + currentScrollPos);
    console.log("prevScrollPos  " + prevScrollPos)
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    position: 'fixed',
    height: '60px',
    width: '100%',
    backgroundColor: 'grey',
    textAlign: 'center',
    transition: 'top 0.6s' 
  }

  return (
    <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>  
      Some Company Inc.
    </div>
  );
};

export default Navbar;