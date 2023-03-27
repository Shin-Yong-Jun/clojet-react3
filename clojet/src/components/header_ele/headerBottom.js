import HeaderSearch from './headerSearch.js'
import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'

function HeaderBottom() {

    const categoryPage = ['NEW', 'SALE', 'BEST', 'MENS', 'LADIES', 'ACC'];


    //사이드메뉴 호버
    const [hovered, setHovered] = useState(false);
    const hoverIn = () => setHovered(true);
    const hoverOut = () => setHovered(false);
 

    //사이드 메뉴 열기
    const open =useRef();

    const openSideMenu = (e) => {
        e.preventDefault();
        sideMenu.current.style.left = "0px";
    }


    // 사이드 메뉴 닫기
  
    const close = useRef();
    const sideMenu = useRef();
  
    const closeSideMenu = (e) => {
      e.preventDefault();
      sideMenu.current.style.left = "-400px";
    }


  return(
    <>
        <div className="bottom">
            <div className="left">
                <a href="/" className="burger" ref={open} onClick={openSideMenu}>
                    <span className="material-symbols-outlined">menu </span>
                </a>
                <Link className="logo" to={'/'}>
                        <img src="./image/clojet_logo_final_black.png" alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul>
                    {
                        categoryPage.map((category) => {
                            return <li>
                                <Link to ={'/categorynew'}>{category}</Link>
                            </li>
                        })
                    }
                </ul>


                <Link className="logo_hidden" to = {"/"}>
                        <img src="./image/clojet_logo_final_black.png" alt="logo" />
                </Link>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <HeaderSearch />
                    </li>
                    <li>
                        <a href="./html/cart/cart.html">
                            <span className="material-symbols-outlined">shopping_cart
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="./html/mypage/myPage.html">
                            <span className="material-symbols-outlined">person
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="sideMenu" ref={sideMenu}>
            <a href="/" className="close_Side" ref={close} onClick={closeSideMenu}>
                <span className="material-symbols-outlined" >close</span>
            </a>
            <ul>
                {
                    categoryPage.map((category) => {
                        return <li>
                            {/* 아얘 새페이지로 이동하는게 메뉴도 닫히고 좋지 않나 */}
                            <a href = "/categorynew"
                            onMouseEnter={hoverIn}
                            onMouseLeave={hoverOut}
                            >{category}</a>
                        </li>
                })
            }
            </ul>
        </div>
        <style>
        {`
        .sideMenu ul li a:hover::after {
            width: ${hovered ? '100%' : '0%'};
            transition: width 0.3s ease-in-out;
        }
        `}
        </style>
    
    
    </>
    )
}

export default HeaderBottom;