import './Accomodation.css'
import Vresort2 from "../assets/resort2.jpg"


const Accomodations = () => {
    return(
        <>

       <section className='acc-hero'
        style={{
            backgroundImage: `url(${Vresort2})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
       >
        <div className='overlayss'>
        <h1>Book your Hotel Suites now</h1>
        <p>We offer hotels and suites at affordable prices</p>
        </div> 
       </section>

        <section className='acc-all'>
            <div className='acc-div'>
                
              <img src={Vresort2} alt="" />
              <div className='hotel-extra'>
                <p className='h-txt'>Queen Hotels Suites</p>
                <div className='guest-div'>
                    <div className='g-bor'>
                    <p>4 Guests</p>
                    </div>    
                    <p>No Smoking</p>
                </div>
                <p className='room-det'>Room Details</p>
              </div>
            </div>

            <div className='acc-div'>
              <img src={Vresort2} alt="" />
              <div className='hotel-extra'>
                <p className='h-txt'>Queen Hotels Suites</p>
                <div className='guest-div'>
                    <div className='g-bor'>
                    <p>4 Guests</p>
                    </div>    
                    <p>No Smoking</p>
                </div>
                <p className='room-det'>Room Details</p>
              </div>
            </div>

            <div className='acc-div'>
              <img src={Vresort2} alt="" />
              <div className='hotel-extra'>
                <p className='h-txt'>Queen Hotels Suites</p>
                <div className='guest-div'>
                    <div className='g-bor'>
                    <p>4 Guests</p>
                    </div>    
                    <p>No Smoking</p>
                </div>
                <p className='room-det'>Room Details</p>
              </div>
            </div>
        </section>

        <section className='inn-box'>
            <div className='cnt-more'>
            <div className='country-dat'>
                <h1>Country Inn & Suites by</h1>
                <h1>Radisson, Page, AZ</h1>
            </div>
            <div className='btn-total'>
                <div className='price-txt'>
                    <h1> <strong className='dis-txt'>$259</strong>$221 USD/Night</h1>
                     <p>$253 USD Total</p>
                </div>
                <div>
                    <button>Book Room</button>
                </div>
            </div>
            </div>

            <div className='acc-txt'>
                <p>4.50</p>
                <p className='rev-txt'>808 Reviews</p>
                <p className='haul-txt'>880 Haul Road, Page, AZ, 86040, US</p>
                <p>(928) 484-1117</p>
            </div>

          
        </section>
        </>
    )
}

export default Accomodations