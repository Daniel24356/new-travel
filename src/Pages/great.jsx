import './great.css'
import Vmount from "../assets/mountain-img.jpg"
import { Link } from "react-router-dom";
// import Vresort from "../assets/header.jpg"
// import Vhotel from "../assets/house-resort.jpg"
import Vgif from "../assets/giphy.webp"
import Vbus from "../assets/giphy2.webp"
import Vflight from "../assets/giphy4.webp"
import Vimg1 from "../assets/1-img.jpg"
import Vimg2 from "../assets/2-img.jpg"
import Vimg3 from "../assets/3-img.jpg"
import Vimg4 from "../assets/4-img.jpg"
import Vimg5 from "../assets/5-img.jpg"
import Vimg6 from "../assets/6-img.jpg"
import Vimg7 from "../assets/7-img.jpg"
import Vresort1 from "../assets/resort1.jpg"
import Vresort2 from "../assets/resort2.jpg"
import Vresort3 from "../assets/resort3.jpg"
import Vresort4 from "../assets/resort4.jpg"

import Vfamily from "../assets/family-img.jpg"
import Vculture from "../assets/cultural-img.jpg"
import Vadventure from "../assets/adventure-img.jpg"
import Vluxury from "../assets/luxury-img.jpg"
// import Hotel from "../../public/hotel.json"

// import Vimg1 from "../assets/1-img.jpg"

const Great = () => {
    return (
        <>
        <div>
            <section className='hero-great' style={{
            backgroundImage: `url(${Vmount})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                <div className='overlays'>
                <h1>Tour Around Asia</h1>
                <p>Wander often, Wonder Always </p>
                </div>
               
            </section>

             <section className='sec-gal'>
                <h1 className='pop-txt'>Popular Countries</h1>
                <div className='box-all'>
                <div className='first-box'>
                    <div  style={{
            backgroundImage: `url(${Vimg1})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                        <h1>HAMBURG</h1>
                        <p>220 locations</p>
                    </div>
                    <div  style={{
            backgroundImage: `url(${Vimg2})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                        <h1>KOLN</h1>
                        <p>220 locations</p>
                    </div>
                </div>
                <div className='second-box'>
                    <div  style={{
            backgroundImage: `url(${Vimg3})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                        <h1>Berlin</h1>
                        <p>220 locations</p>
                    </div>
                    <div  style={{
            backgroundImage: `url(${Vimg4})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                    <h1>DUSSELDORF</h1>
                    <p>220 locations</p>
                    </div>
                    <div  style={{
            backgroundImage: `url(${Vimg5})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                    <h1>FRANKFURT</h1>
                    <p>220 locations</p>
                    </div>
                </div>
                <div className='third-box'>
                    <div  style={{
            backgroundImage: `url(${Vimg6})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                        <h1>MUNCHEN</h1>
                        <p>220 locations</p>
                    </div>
                    <div  style={{
            backgroundImage: `url(${Vimg7})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>
                        <h1>HANNOVER</h1>
                        <p>220 locations</p>
                    </div>
                </div>
                </div>
             </section>

            <section className='explore-div'>
                <div className='world-div'>
                    <h1>Available Transports</h1>
                    <div>
                        <p>We work to provide transport means for everyone</p>
                    </div>
                </div>

                <div className='locations-div'>
                    <div className='bck-image' style={{
            backgroundImage: `url(${Vflight})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                    <p className='trans-txt'>Flight</p>  
                    <p className='see-txt'>see more</p>
                    </div>
                    <div className='bck-image' style={{
            backgroundImage: `url(${Vgif})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                  <p className='trans-txt'>Cars</p>  
                  <p className='see-txt'>see more</p>
                       
                    </div>

                 <div className='bck-image' 
                 style={{
            backgroundImage: `url(${Vbus})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom"
            }}>     
                   <p className='trans-txt'>Bus</p>  
                   <p className='see-txt'>see more</p>
                       
                    </div>

                </div>
                {/* <p className='seemore-txt'>see more</p> */}
            </section>

            <section className='tour-box'>
                <h1>Tours</h1>
                 <div className='tour-all'>
                    <div className='first-pos' 
                    style={{
                        backgroundImage: `url(${Vfamily})`,
                        backgroundRepeat: "none",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom"
                        }}
                     >
                       <p>Family tour</p>
                    </div>
                    <div className='sec-pos'
                    style={{
                        backgroundImage: `url(${Vculture})`,
                        backgroundRepeat: "none",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom"
                        }}
                    >
                       <p>Cultural tour</p>
                    </div>
                    <div className='third-pos'
                    style={{
                        backgroundImage: `url(${Vadventure})`,
                        backgroundRepeat: "none",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom"
                        }}
                    >
                    <p>Adventure tour</p>
                    </div>
                    <div className='fourth-pos'
                    style={{
                        backgroundImage: `url(${Vluxury})`,
                        backgroundRepeat: "none",
                        backgroundSize: "cover",
                        backgroundPosition: "bottom"
                        }}
                    >
                    <p>Luxury tour</p>
                    </div>
                 </div>
            </section> 

            {/* <section>
              <h1>Activities to do In Asia</h1>
              <div>
                <div>
                    <p>DAY TRIPS & EXCURSIONS</p>
                    <p>TOURS & SIGHTSEEING</p>
                    <p>Reservations</p>
                    <p>CULTURAL & THEME TOURS</p>
                </div>
                <div>
                    <div>
                        <p>SHOW ONLY</p>
                        <div>CULTURAL TOURS</div>
                    </div>
                    <div>
                        <button>VIEW ALL</button>
                    </div>
                </div>
              </div>

              <div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <div>
                            <div>
                                <div>
                                    <p>OAHU DAY TRIP</p>
                                    <p>MAUI,HAWAII</p>
                                </div>
                                <img src="" alt="" />
                            </div>
                            <p>Oahu Day Trip to Pearl Harbor, Honolulu</p>
                            <p>and Punchbowl </p>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                     <div></div>
                     <div></div>
                     <div></div>
                     <div></div>
                </div>
              </div>
            </section> */}

            <div className="accomodationDiv">
                <h1 style={{
                    paddingBottom: "35px"
                }}>Accomodations</h1>
            <div className="accomodation">
                <div className="accom dat1"
                style={{
                    backgroundImage: `url(${Vresort1})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom"
                    }}
                >
                  <Link className='link-acc' to='/accom'>RESORT</Link> 
                </div>
                <div className="accom dat2"
                style={{
                    backgroundImage: `url(${Vresort2})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom"
                    }}
                >
                     <Link className='link-acc'  to='/accom'> HOTEL</Link>
                </div>
                <div className="accom"
                style={{
                    backgroundImage: `url(${Vresort3})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom"
                    }}
                >
                 <Link className='link-acc' to='/accom'>NORD</Link>   
                </div>
                <div className="accom"
                style={{
                    backgroundImage: `url(${Vresort4})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",
                    backgroundPosition: "bottom"
                    }}
                >
                  <Link className='link-acc' to='/accom'>APARTMENT</Link> 
                </div>
            </div>
            </div>
        </div>
        </>
    )
 }

 export default Great