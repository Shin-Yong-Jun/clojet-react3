import { useState, useRef, useEffect } from "react";
function HeaderBackScroll() {
    
     // 브라우저 창의 1/3 지점을 넘어가면 등장하는 백스크롤 버튼
     const btnRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > window.innerHeight / 3) {
                btnRef.current.style.opacity = '1';
                btnRef.current.style.visibility = 'visible';
            } else {
                btnRef.current.style.opacity = '0';
                btnRef.current.style.visibility = 'hidden';
            }
        }
        
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    },[])
    
    // 백스크롤 버튼 클릭 시 위로 이동
    // eslint-disable-next-line no-unused-vars
    const [scrollY, setScrollY] = useState(0);

    const ScrolltoTop = () => {
        const Scrolling = setInterval(() => {
          window.scrollBy(0, -80);
          if (window.pageYOffset <= 0) {
            clearInterval(Scrolling);
            setScrollY(0);
          }
        }, 16);
      };
      
    


    return(
    <>
        <div className="btn_scrollBack" ref={btnRef} onClick={ScrolltoTop}><img src="./image/backscroll_img.png" alt="bckscroll"/></div>
    </>
  )};
export default HeaderBackScroll;