import './About.css';
import sunlight from '../../assets/sunlight.avif'
import jeep from '../../assets/jeep.avif'
import { IoChatbubblesOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaMapMarkerAlt, FaPlaneDeparture, FaRegHeart, FaCheck, FaCar } from "react-icons/fa";
import plane from '../../assets/plane.avif'
import suitcase from '../../assets/newsuitcase.png'

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="overlay">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="diffplaces">
          <div className="leftstuff">
              <div className="topleftstuff">
                <div className="how">
                    <img src={jeep} alt="" className='jeep'/>
                    <h2 className='work'>OUR VALUES ARE YOURS TOO!</h2>
                    <p className="values">Travel Smart provides personalized travel planning and guided tours, offering tailored vacation experiences for tourists. The company arranges accommodations, transportation, and sightseeing, ensuring smooth and memorable journeys for travelers.</p>
                </div>

                <div className="years">42+ <br /><span className="year">YEARS</span></div>
              </div>

              <div className="bottomleft">
                <h1 className="curve">BEHIND THE FUN, AHEAD OF THE TRIP</h1>
                <p className="idk">Travel Smart was founded 42 years ago with a vision to make global travel more accessible and enjoyable for everyone. Starting as a small travel consultancy, it grew over the decades into a trusted partner for tourists seeking adventure, culture, and relaxation. <br />Travel Smart provides personalized travel planning and guided tours, offering tailored vacation experiences for tourists. The company arranges accommodations, transportation, and sightseeing, ensuring smooth and memorable journeys for travelers.</p>

              <div className="each-check">
                 <FaCheck className='check'/>
                  <p className="affordable">Very Affordable Prices with a guaranteed refund in any unsatisfactory event</p>
              </div>

              <div className="each-check">
                 <FaCheck className='check'/>
                  <p className="affordable">Wonderful Partners to make your trip even more enjoyable!</p>
              </div>

              <div className="each-check">
                 <FaCheck className='check'/>
                  <p className="affordable">Exciting promos from time to time give amazing discounts, great for your wallet!</p>
              </div>
              </div>
          </div>

          <div className="rightstuff">
            <img src={plane} alt="" className='wing'/>
          </div>
      </section>

      <section className="historyshi">
        <div className="rightside">
            <img src={sunlight} alt="" className='sunlight'/>
        </div>

        <div className="leftside">
            <h1 className="about">ABOUT TRAVEL SMART</h1>
            <p className="scope">Travel Smart provides personalized travel planning and guided tours, offering tailored vacation experiences for tourists. The company arranges accommodations, transportation, and sightseeing, ensuring smooth and memorable journeys for travelers.</p>
            <p className="history">Travel Smart was founded 42 years ago with a vision to make global travel more accessible and enjoyable for everyone. Starting as a small travel consultancy, it grew over the decades into a trusted partner for tourists seeking adventure, culture, and relaxation.</p>
        </div>
      </section>

      <section className="services">
        <h1 className='serviceheader'>OUR SERVICES</h1>
        <p className='motto'>We turn your travel dreams into unforgettable adventures!</p>
        <div className="servicegrid">
            <div className="eachservice">
               <FaPlaneDeparture className='flight'/>
               <div className="info">
                <p className='variety'>Wide Variety of Tours</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>

            <div className="eachservice">
               <FaRegHeart className='flight'/>
               <div className="info">
                <p className='variety'>Highly Qualified Service</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>

            <div className="eachservice">
               <IoChatbubblesOutline className='flight'/>
               <div className="info">
                <p className='variety'>24/7 Support</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>

            <div className="eachservice">
               <BsCurrencyDollar className='flight'/>
               <div className="info">
                <p className='variety'>Attractive Prices</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>

            <div className="eachservice">
               <FaMapMarkerAlt className='flight'/>
               <div className="info">
                <p className='variety'>Exciting Places</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>

            <div className="eachservice">
               < FaCar className='flight'/>
               <div className="info">
                <p className='variety'>Wide Variety of Tours</p>
                <p className='unique'>Our unique matching system lets you find just the tour you want for your next holiday</p>
               </div>
            </div>
        </div>
      </section>

      <section className="finalbanner">
        <div className="innerdiv">
        <div className="lefttext">LETS GET STARTED THEN!! <br />WELCOME TO THE WORLD OF TRAVEL SMART!!</div>
        <div className="imgdiv"><img src={suitcase} alt="" className='suitcase'/></div>
        </div>
      </section>
    </>
  );
};

export default About;
