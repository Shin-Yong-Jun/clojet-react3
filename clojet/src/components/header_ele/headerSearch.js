import { useRef } from "react";
function HeaderSearch() {

  const searchIcon = useRef();
  const searchInput = useRef();
  let clickCnt = 0;
  
    const inputShow = (e) => {
      e.preventDefault();
      clickCnt++;
      if (window.innerWidth <= 768) {
        searchInput.current.style.opacity = '1';
        searchInput.current.style.visibility = 'visible';
        searchInput.current.style.width = '50px';
        searchInput.current.placeholder = '검색';
      } else {
        searchInput.current.style.opacity = '1';
        searchInput.current.style.visibility = 'visible';
        searchInput.current.style.width = '180px';
        searchInput.current.placeholder = '검색어를 입력하세요.';
      }
      
      if(clickCnt % 2 === 0) {
          searchInput.current.style.opacity = '0';
          searchInput.current.style.visibility = 'hidden';
          searchInput.current.style.width = '0px';
      }
  }


    return(
    <>
      <div className="search">
        <input 
        type="text"
        placeholder="검색어를 입력해주세요."
        ref = {searchInput} />
        <a href="/">
          <span 
            className="material-symbols-outlined"
            ref = {searchIcon}
            onClick ={inputShow}>search
          </span>
        </a>
      </div>
    </>
  )};
export default HeaderSearch;