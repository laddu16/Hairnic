import React, { useEffect, useState } from 'react';
import tick from '../Components/image/check.png';
import home from '../Components/image/round.png';
import twitter from '../Components/image/twitter.png';
import facebook from '../Components/image/facebook (2).png';
import instagram from '../Components/image/instagram (1).png';
import linkedin from '../Components/image/linkedin (1).png'
import { Modal } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';


const Home = () => {
    const details = [
        {
            title: '© Your Site Name, All Right Reserved. Designed By HTML Codex',

        },
        {
            para: 'home',
            para1: 'Cookies',
            para2: 'Help',
            para3: 'FAQs'
        }

    ]
    const information = [
        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-1.jpg',
            tittle: 'Foods that are good for your hair growing',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.,'
        },

        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-2.jpg',
            tittle: 'How to take care of hair naturally',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.'
        },
        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-3.jpg',
            tittle: 'How to use our natural & organic shampoo',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
        }

    ]
    const [get, setGet] = useState({})
    const [show, setShow] = useState(false)



    const handleShow = (data) => {
        debugger;
        setShow(true)
        setGet(data)

    }
    const handleClose = () => {
        setShow(false)
    }

    const [color, setColor] = useState(false);

    const handleColor = () => {
        setColor(!color);
    }
    const [change, setChange] = useState(false);

    const handleChange = () => {
        setChange(!change);
    }

    const [seconds, setSeconds] = useState(60);
    const [minutes, setMinutes] = useState(60);
    const [Hours, setHours] = useState(24);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(s => s - 1);
        }, 10);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            setMinutes(p => p - 1)
            setSeconds(60)
        }
        else {
            setMinutes(minutes)
        }
    })
    useEffect(() => {
        if (minutes === 0) {
            setHours(h => h - 1)
            setMinutes(60)
        }
        else {
            setHours(Hours)
        }
    })

    return (
        <>
            <div className='container-fluid image'>
                <div className='row'>
                    <div className=' box col-lg-6' >
                        <h4 className=''>Natural & Organic</h4>
                        <h1 className='mb-3'>Hair <span>Shampoo</span> For Healthy Hair</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et magnis dis parturient montes.</p>
                        <div className=''>
                            <button className='m-2 btn'>Shop Now</button>
                            <button className='btn1'>Contact Us</button>
                        </div>

                    </div>
                    <div className='col-lg-6 p-5' >
                        <img className='animationimage1' src='https://themewagon.github.io/hairnic/img/shampoo.png' width='100%'></img>

                    </div>

                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row '>
                    <div className='col-lg-4 '>

                        <div className=' cut'>
                            <div className='line '>
                                <div className='d-flex justify-content-center'>
                                    <img src='https://cdn-icons-png.flaticon.com/512/40/40107.png' />
                                </div>
                                <p>100% Natural</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='cut '>
                            <div className='line '>
                                <div className='d-flex justify-content-center'>
                                    <img src='https://static.vecteezy.com/system/resources/previews/009/663/546/non_2x/water-drop-icon-transparent-free-png.png' /></div>
                                <p>Anti Hair Fall</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='cut '>
                            <div className='line '>
                                <div className='d-flex justify-content-center'>
                                    <img src='https://static-00.iconduck.com/assets.00/cross-mark-emoji-512x512-9lmr75ja.png' /></div>
                                <p>Hypoallergenic</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='desc mt-5'>
                            <img className='animationimage2' src='https://themewagon.github.io/hairnic/img/shampoo-1.png' />
                        </div>
                    </div>
                    <div className={`col-lg-6 desc1 ${color === true ? 'purple' : ''}
                 `}>
                        <h1><span>Healthy Hair</span> Is A Symbol Of Our Beauty</h1>
                        <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                        <p className='mt-3'>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        <button className='mt-3' onClick={handleColor}>Shop Now</button>


                    </div>

                </div>

            </div>
            <div className='container-fluid  info'>
                <div className='row'>
                    <div className='col-lg-6 info1'>
                        <img className='animationimage3' src='https://themewagon.github.io/hairnic/img/shampoo-2.png' width='100%' />

                    </div>
                    <div className='col-lg-6'>
                        <div className={`info2 p-4 ${change === true ? 'green' : ''}`}>
                            <div className='line1 '>
                                <p className='pt-4'>Natural & Organic Shampoo</p>
                                <h2 className='pb -3'>DEALS OF THE DAY</h2>
                                <h1 className='pb-3'>$99.99</h1>
                                <h5>Fresh Organic Shampoo</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus sed auctor.</p>

                                <div className='d-flex date'>
                                    <div className='' >
                                        <h1>0-501</h1>
                                        <p><i>-Days-</i></p>
                                    </div>
                                    <div>
                                        <h1>{Hours}</h1>
                                        <p><i>-Hours-</i></p>
                                    </div>
                                    <div>
                                        <h1>{minutes}</h1>
                                        <p><i>-Mins-</i></p>
                                    </div>
                                    <div>
                                        <h1>{seconds}</h1>
                                        <p><i>-Sec</i></p>
                                    </div>

                                </div>
                                <button onClick={handleChange}>Shop Now</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <div className='small pt-5'>
                <h1>Best Benefits Of Our <span>Natural</span> </h1>
                <h1><span> Hair Shampoo</span></h1>
                <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus</p>

            </div>
            <div className='container-fluid pt-5'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>Natural & Organic</h1> <hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>Anti Hair Fall</h1><hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>

                        <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>Anti-dandruff</h1><hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <img className='animationimage4' src='https://demo.htmlcodex.com/2727/single-product-website-template/img/shampoo.png' width='100%' />

                    </div>
                    <div className='col-lg-4'>
                        <div className='d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>No Internal Side Effect</h1><hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>
                        <div className=' d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>No Skin Irritation</h1><hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>
                        <div className='d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                            <img src={tick} width='10%' height='28px' />
                            <div className='style'>
                                <h1>No Artificial Smell</h1><hr />
                                <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mom'>
                <div className='small1 '>
                    <h1>How To Use Our <span>Natural & Organic</span> Hair Shampoo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                    </p>
                </div>
                <div className='container-fluid pt-5'>
                    <div className='row'>
                        <div className='col-lg-4 over'>
                            <div className=''>
                                <img src={home} width='120px' height='120px' />
                            </div>
                            <h2 className='pt-3'>Wash Hair With Water</h2> <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>

                        <div className='col-lg-4 over'>
                            <div className=''>
                                <img src={home} width='120px' height='120px' />
                            </div>
                            <h2 className='pt-3'>Apply Shampoo On Hair</h2> <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>

                        <div className='col-lg-4 over'>
                            <div className=''>
                                <img src={home} width='120' height='120px' />
                            </div>
                            <h2 className='pt-3'>Wait 5 Mins And Wash</h2> <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className=''>
                <div className='mt-5 price '>
                    <h1>Our Natural <span>Hair Products</span></h1>
                    <p className='mt-4  '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className='container-fluid'>
                    <div className='row mt-5'>
                        <div className='col-lg-3 '>
                            <div className='fit'>
                                <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-1.png' width='50%' height='400px' />
                                <div className='fit1'>
                                    <p>Hair Shining Shampoo</p>
                                    <h5 className='mb-3 '>$99.99</h5>
                                    <button className='mb-1'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='fit'>
                                <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-2.png' width='50%' height='400px' />
                                <div className='fit1'>
                                    <p>Hair Shining Shampoo</p>
                                    <h5 className='mb-3'>$99.99</h5>
                                    <button className='mb-1'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='fit'>
                                <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-1.png' width='50%' height='400px' />
                                <div className='fit1'>
                                    <p>Hair Shining Shampoo</p>
                                    <h5 className='mb-3'>$99.99</h5>
                                    <button className='mb-1'>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='fit '>
                                <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-2.png' width='50%' height='400px' />
                                <div className='fit1'>
                                    <p>Hair Shining Shampoo</p>
                                    <h5 className='mb-3'>$99.99</h5>
                                    <button className='mb-1'>Add To Cart</button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='container-fluid move '>
                        <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                        </p>
                        <div className='round1'>
                            <div className='round'>
                                <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-2.jpg' height='120px' width='120px' />
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                        <h2>Client Name</h2>
                        <p><i>Profession</i></p>
                    </div>

                </SwiperSlide>
                <SwiperSlide><div className='container-fluid move '>
                    <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                    </p>
                    <div className='round1'>
                        <div className='round'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-1.jpg' height='120px' width='120px' />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    <h2>Client Name</h2>
                    <p><i>Profession</i></p> </div>
                </SwiperSlide>
                <SwiperSlide><div className='container-fluid move '>
                    <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                    </p>
                    <div className='round1'>
                        <div className='round'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-3.jpg' height='120px' width='120px' />
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    <h2>Client Name</h2>
                    <p><i>Profession</i></p>
                </div>
                </SwiperSlide>

            </Swiper>

            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div className='cake'>
                        <h1>From Our <span>Blog Articles</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    </div>
                    {
                        information?.map((item, index) => (
                            <div key={index} className='col-lg-4'>
                                <div className='hair'>
                                    <img src={item?.img} width='100%' />
                                    <h4>{item?.tittle}</h4>
                                    <p>{item?.para}</p>
                                    <button onClick={(e) => handleShow(item)}>Read More</button>


                                </div>


                            </div>
                        ))

                    }



                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1 className='dis '>{get?.tittle}</h1>
                        <p className='dis1'>{get?.para}</p>
                    </Modal.Body>

                </Modal>
            </div>
            <div className='news'>
                <h1>Let's Subscribe <span>The Newsletter</span></h1>
                <p>Subscribe now to get 30% discount on any of our products</p>
                <form className='itag d-flex justify-content-center m-3'>

                    <input type='text' placeholder='Enter Your Email'></input><i className="  bi bi-send"></i>
                </form>
            </div>


            <div className='container-fluid mt-5 '>
                <div className='row'>
                    <div className='col-lg 3 last '>
                        <h1>Hairnic</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus.</p>
                    </div>
                    <div className='col-lg 3 last1 mt-5'>
                        <h2>Get In Touch</h2>
                        <p>123 Street,New York,USa.</p>
                        <p>+0123456789</p>
                        <p>keerthi@123gmail.com</p>
                        <div className='perfect '>
                            <img src={twitter} height='10%' width='30px' />
                            <img src={facebook} height='10%' width='28px' />
                            <img src={instagram} height='10%' width='28px' />
                            <img src={linkedin} height='10%' width='28px' />
                        </div>
                    </div>

                    <div className='col-lg 3 last1 mt-5'>
                        <h2>Our Products</h2>
                        <dl>
                            <dd> &gt; Hair Shinning Shampoo</dd>
                            <dd> &gt;Anti-Dantruff Sampoo</dd>
                            <dd> &gt;Anti Hair Fall Shampoo</dd>
                            <dd> &gt;Hair Growing Shampoo</dd>
                            <dd> &gt;Anti Smell S</dd>
                        </dl>

                    </div>
                    <div className='col-lg 3 last1 mt-5'>
                        <h2>Popular Link</h2>
                        <dl>
                            <dd> &gt;About Us</dd>
                            <dd> &gt;Contact Us</dd>
                            <dd> &gt;Privacy Policy</dd>
                            <dd> &gt;Terms & Condition</dd>
                            <dd> &gt;Career</dd>
                        </dl>

                    </div>
                </div>
            </div>
            <div className='container-fluid footer'>
                <div className='row'>

                    {details?.map((item, index) => (
                        <div key={index} className='col-lg-6'>
                            <div className='final1'>
                                <p>{item?.title}</p>
                            </div>
                            <div className='final d-flex justify-content-end align-item-center gap-5'>
                                <p>{item?.para}</p>
                                <p>{item?.para1}</p>
                                <p>{item?.para2}</p>
                                <p>{item?.para3}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Home