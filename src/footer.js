import React, { useState, useEffect } from 'react'; 
import { debounce } from './helpers'; 
import "./footer.css" 

function Footer() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const handleScroll = debounce(() => {
  const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos < currentScrollPos &&
        currentScrollPos - prevScrollPos > 10|| currentScrollPos > 1000) 
        
    );
    //bij naar bovenscrollen: toon navbar in bovenste 100 pixels hoogte homesectie van top en 30px van de bovenste rand
    console.log("currentScrollPos  " + currentScrollPos);
    console.log("prevScrollPos  " + prevScrollPos);
    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const footerStyles = {

    position: "fixed",
    height: "100vh",
    width: "100%",
    textAlign: "center",
    transition: "top 0.6s",

  };

  return (
    <div className="footercont"
      style={{ ...footerStyles, top: visible ? "0" : "60px" }}
    >
    <div  className="footerdoc">
      I am a footer</div>
    </div>
  );
}

export default Footer;
