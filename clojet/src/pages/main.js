import '../styles/main.css';

const Main = () => {
    return(
        <main>
                    <div className='inner'>
                        {/* Main Slider  */}
                        <div className='slider'>
                            <div className='slides'>
                                <div className='slide'>
                                    <a href='./html/events/events1.html'>
                                        <img src='./image/clojet-mainfw-slider1.png' alt='/' />
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a href='./html/events/events1.html'>
                                        <img src='./image/clojet-mainfw-slider2.png' alt='/' />
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a href='./html/events/events1.html'>
                                        <img src='./image/clojet-mainfw-slider3.png' alt='/' />
                                    </a>
                                </div>
                            </div>
    
                            <a href='/' className='prev slideBtn'>
                                1
                            </a>
                            <a href='/' className='next slideBtn'>
                                1
                            </a>
    
                            <ul className='pager'>
                                <li></li>
                            </ul>
                        </div>
                        {/* ------------------------------------------------------------------ */}
    
                        <div className='empty'></div>
                        {/*MAIN item_list */}
                        <div className='main_products1'>
                            <h4>SPECIAL SALES</h4>
                            <ul className='test'>
                                <li>
                                    <a href='/' className='Men'>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='Lady'>
                                        Lady
                                    </a>
                                </li>
                            </ul>
                        </div>
    
                        <div className='item_container1'>
                            <a className='btn_back' href='/'>
                                <img src='./image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='back_img' />
                            </a>
                            <a className='btn_foward' href='/'>
                                <img src='./image/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='foward_img' />
                            </a>
                            <div className='item_list sales_men'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>남자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
    
                            <div className='item_list sales_lady'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>여자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='empty'></div>
    
                        {/*  */}
                        {/* Main banner2 */}
    
                        <div className='main_banner_box2'>
                            <a href='/'>
                                <img src='./image/clojet-mainfw-middle_banner.png' alt='middle_banner' />
                            </a>
                        </div>
                        <div className='empty'></div>
    
                        {/*MAIN item_list2 */}
                        <div className='main_products2'>
                            <h4>WINTER CLOJET</h4>
                            <ul>
                                <li>
                                    <a href='/' className='Men'>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='Lady'>
                                        Lady
                                    </a>
                                </li>
                            </ul>
                        </div>
    
                        <div className='item_container2'>
                            <a className='btn_back' href='/'>
                                <img src='./image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='back_img' />
                            </a>
                            <a className='btn_foward' href='/'>
                                <img src='.//image/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='foward_img' />
                            </a>
                            <div className='item_list weather_men'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>남자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>{' '}
                                            </p>{' '}
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='item_list weather_lady'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>여자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='empty'></div>
    
                        {/* Main banner3 */}
                        <div className='main_banner_box3'>
                            <a href='/'>
                                <img src='./image/clojet-mainfw-foot_banner.png' alt='foot_banner' />
                            </a>
                        </div>
                        <div className='empty'></div>
    
                        {/*MAIN item_list3 */}
                        <div className='main_products3'>
                            <h4>NEW-YEAR CURATION</h4>
                            <ul>
                                <li>
                                    <a href='/' className='Men'>
                                        Men
                                    </a>
                                </li>
                                <li>
                                    <a href='/' className='Lady'>
                                        Lady
                                    </a>
                                </li>
                            </ul>
                        </div>
    
                        <div className='item_container3'>
                            <a className='btn_back' href='/'>
                                <img src='./image/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='back_img' />
                            </a>
                            <a className='btn_foward' href='/'>
                                <img src='./image/arrow_forward_ios_FILL0_wght400_GRAD0_opsz48.svg' alt='foward_img' />
                            </a>
                            <div className='item_list new_men'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>남자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>{' '}
                                            </p>{' '}
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/menwear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className='item_list new_lady'>
                                <ul>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear1.jpg' alt='item1' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>여자라이언 무스탕 / 골덴</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>210,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear2.jpg' alt='item2' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>라이언 무스탕 / 레더</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear3.jpg' alt='item3' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>포레스트 그린 코트 / 롱</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear4.jpg' alt='item4' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>로얄 퍼 코트 / 브라운</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear5.jpg' alt='item5' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear6.jpg' alt='item6' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear7.jpg' alt='item7' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear8.jpg' alt='item8' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear9.jpg' alt='item9' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className='item_img'>
                                            <a href='./html/category/detail_page.html'>
                                                <img src='./image/ladywear10.jpg' alt='item10' />
                                            </a>
                                        </div>
                                        <div className='item_info'>
                                            <p className='item_name'>
                                                <a href='./html/category/detail_page.html'>이안 디자인 오버셔츠</a>
                                            </p>
                                            <span className='disCount'> 30% </span>
                                            <del className='price'> 300,000원 </del>
                                            <p className='price'>
                                                <strong>285,000</strong>원
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='empty'></div>
                    </div>
                </main>
      )
}

  

export default Main