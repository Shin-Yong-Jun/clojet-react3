import { useRef, useEffect } from 'react';
function HeaderTopDeltaY() {

    //델타Y

    const header_top = useRef(null);
    const header_inner_ul = useRef(null);
    const header_top_comment = useRef();

    useEffect(() => {
        window.addEventListener('wheel', handleWheel);
        return () => {
            window.removeEventListener('wheel', handleWheel);
        };
    }, []);

    const handleWheel = (e) => {
        let wheel = e.deltaY;
        if (wheel > 0) {
            header_top.current.style.visibility = 'visible';
            header_top.current.style.height = '30px';
            header_top.current.style.padding = '5px 0';
            header_inner_ul.current.style.display = 'block';
        } else {
            header_top.current.style.visibility = 'hidden';
            header_top.current.style.height = '0px';
            header_top.current.style.padding = '0px';
            header_inner_ul.current.style.display = 'none';
        }
    };

    return (
        <>
            <div className='top' ref={header_top}>
                <div className='comment' ref={header_top_comment}>
                클로젯 공식 온라인 스토어
                </div>
                <ul className='inner_submenu_right' ref={header_inner_ul}>
                    <li>
                        <a href='./html/login/login.html'>LOGIN</a>
                    </li>
                    <li>
                        <a href='./html/signup/signup.html'>SIGN-UP</a>
                    </li>
                </ul>
            </div>
        </>
    );
}
export default HeaderTopDeltaY;
