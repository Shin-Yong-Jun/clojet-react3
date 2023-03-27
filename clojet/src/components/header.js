import '../styles/header.css';
import HeaderBackScroll from './header_ele/headerBackScroll'
import HeaderTopDeltaY from "./header_ele/headerTopDeltaY";
import HeaderBadge from "./header_ele/headerBadge";
import HeaderBottom from "./header_ele/headerBottom";
function Header() {
    
    return(
    <>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <header>
            <HeaderBackScroll />
            <HeaderTopDeltaY />
            <HeaderBottom />
            <HeaderBadge />
        </header>
    </>
  )};
export default Header;