import {useEffect, useRef} from 'react'

function HeaderBadge() {
  
  const badgeRef = useRef(null);

  useEffect(() => {
      const handleScroll = () => {
          if(window.scrollY > window.innerHeight / 3) {
            badgeRef.current.style.opacity = '0';
            badgeRef.current.style.visibility = 'hidden';
          } else {
            badgeRef.current.style.opacity = '1';
            badgeRef.current.style.visibility = 'visible';
          }
      }
      
      window.addEventListener("scroll", handleScroll);
      
      return () => {
          window.removeEventListener("scroll", handleScroll);
      }
  },[])


  const badgeClose = useRef(null);

  const handleClick = (event) => {
    if(badgeClose.current.contains(event.target)) {
      badgeRef.current.style.display = 'none';
    }
  }


  return(
    <>
      <div className="badges" ref={badgeRef}>
                <div className="badge">
                    <img className="badgeImg" src="./image/clojet-main-badge1.png" alt="Badge" />
                    <img className="close"
                    src="./image/close_button.svg" 
                    ref={badgeClose}
                    onClick={handleClick} 
                    alt="close" />
                </div>
            </div>
    
    </>
  )
}

export default HeaderBadge;