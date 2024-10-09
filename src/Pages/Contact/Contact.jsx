
import "./contact.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuMailOpen , LuPhoneCall } from "react-icons/lu";
import Location from "./Location"; // Geolocation API component
import swal from "sweetalert"; // SweetAlert for notifications

const Contact = () => {
  // SweetAlert for feedback form submission
  const handleFeedback = (e) => {
    e.preventDefault(); // Prevents form submission from reloading the page
    swal({
      title: "Feedback Submitted!",
      text: "Thank you for your feedback!",
      icon: "success",
    });
    setFormData({name: "", email: "", message: ""})
  };

  return (
    <>
      {/* Contact Us Section */}
      <div className="cont">
            <h1>Contact Us</h1>
        </div>

      {/* Contact Details */}
      <div className="three">
        <div className="box">
          <FaMapMarkerAlt className="icon" />
          <h3>Address</h3>
          <p>No. 6 Royaline Avenue</p>
          <p>Rivers State, Nigeria</p>
        </div>
        <div className="box">
          <LuPhoneCall className="icon" />
          <h3>Phone Number(s)</h3>
          <p>(+234) 814 234 7750</p>
          <p>(+234) 808 097 5645</p>
        </div>
        <div className="box">
          <LuMailOpen className="icon" />
          <h3>Email Address</h3>
          <a href="mailto:travelsmart@email.com">travelsmart@email.com</a>
          <a href="mailto:dummyemail@email.com">dummyemail@email.com</a>
        </div>
      </div>

      {/* Feedback Form and Geolocation */}
      <div className="flex">
        {/* Geolocation API Component */}
        <div className="location">
          <Location />
        </div>

        {/* Feedback Form */}
        <div className="form" id="form">
          <div className="container">
            <form className="form" onSubmit={handleFeedback}>
              <div className="descr">
                <h2>Leave Your Feedback</h2>
              </div>

              {/* Name Input */}
              <div className="inputs">
                <input
                  required
                  type="text"
                  name="name"
                  autoComplete="off"
                />
                <label htmlFor="name">Name</label>
              </div>

              {/* Email Input */}
              <div className="inputs">
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="off"
                />
                <label htmlFor="email">Email</label>
              </div>

              {/* Message Input */}
              <div className="inputs">
                <textarea
                  required
                  cols="30"
                  rows="4"
                  id="message"
                  name="message"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              {/* Submit Button */}
              <button type="submit">Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
