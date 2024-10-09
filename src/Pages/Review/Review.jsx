import React from "react";
import "./review.css";
import Nav from "../../Components/Navbar/Nav";
import { CiCircleCheck } from "react-icons/ci";
import { GiTowerBridge } from "react-icons/gi";
import { LuClipboardSignature } from "react-icons/lu";
import img1 from "../../assets/1-img.jpg";
import img2 from "../../assets/2-img.jpg";
import img3 from "../../assets/3-img.jpg";
import img4 from "../../assets/4-img.jpg";

const ReviewPage = () => {
  return (
    <>
      <Nav />
      <div className="con">
        <div className="tex">
          <p className="nu">3,200,000 +</p>
          <h2>Travel Gurus shared their best tips and experiences</h2>
          <h2>And we are waiting for yours</h2>
          <a href="/contact">
            <button className="button">How was your stay</button>
          </a>
        </div>
      </div>
      <div className="second">
        <div className="question">
          <h2>How does it work</h2>
        </div>
        <div className="thr">
          <div className="box">
            <div className="icon">
              <CiCircleCheck className="icons" />
            </div>
            <div className="text">
              <h2>It starts w booking</h2>
              <p>
                The only way to leave a review is to first make a booking.
                That's how we know our reviews come from real guests who have
                stayed at the property.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <GiTowerBridge className="icons" />
            </div>
            <div className="text">
              <h2>Followed by a trip</h2>
              <p>
                When guests stay at the property they check out how quiet the
                room is, how friendly the staff are and more.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <LuClipboardSignature className="icons" />
            </div>
            <div className="text">
              <h2>And finally, a review</h2>
              <p>
                After their trip, guests tell us about their stay. We check for
                naughty words and verify the authenticity of all guest reviews
                before adding them to our site.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tx">
          <h1>Recent Reviews</h1>
        </div>
      <div className="recent">
        <div className="card">
          <div className="imgcont">
            <img src={img1} alt="" />
          </div>
          <div className="text">
            <p>The Red Sea</p>
            <p>
              The breakfast was nice the bed was very comfortable nice rooms
              needed cleaning unorganised staff not the mix up in communication
              between the staff few problems with checking in food was late and
              food was not what we ordered we stayed 2 nights but we spoke with
              the manager he apologised for the situation and reassured us all
              would be fine nice place nice food nice music
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgcont">
            <img src={img2} alt="" />
          </div>
          <div className="text">
            <p>Hawaii</p>
            <p>
              Great hotel. Very Nordic atmosphere. Minimalist yet very
              functional and complete. The staff were very alert to my needs. A
              few extra touches made it very desirable for a repeat visit.
              Handwritten welcome post card!, complementary snacks and soft
              drinks. wow. Great breakfast that catered for the local palate and
              western staple. Negative section of review Externally, No big sign
              with hotel name. You could almost drive by. once you're in, a
              different world.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgcont">
            <img src={img3} alt="" />
          </div>
          <div className="text">
            <p>Philippines</p>
            <p>
              I really didn’t like the fact I came in and mosquitos were all
              over the place. Even after going out and coming back it was clear
              fumigation was needed so I ended up spending 4-5 hours out of the
              accomodation to ensure fumigation is done. Also to be honest, the
              bathroom isn’t great. Needs hand wash, floor mats or at least a
              shower curtain considering you’re showering in a bathtub.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgcont">
            <img src={img4} alt="" />
          </div>
          <div className="text">
            <p>The PanAtlantic</p>
            <p>
              There was no jacuzzi as advertised There was no gym as advertised
              Air conditioner could not be controlled. Too cold Walls not sound
              proof. Lots of noise
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewPage;
