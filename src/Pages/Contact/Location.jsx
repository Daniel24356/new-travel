import React, { useState, useEffect } from "react";
import "./location.css";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  maxWidth: "80%",
  height: "400px",
};

const Location = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ lat: latitude, lng: longitude });
    };

    const error = () => {
      setError("Unable to retrieve your location");
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className="locate">
      <h1 className="locate-text">Get in Touch</h1>
      <p className="st">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo molestiae
        sapiente <br /> voluptas consequatur doloremque nemo blanditiis odit
        recusandae ullam voluptatem!
      </p>
      {error && <p>Error: {error}</p>}
      {location ? (
        <LoadScript googleMapsApiKey="AIzaSyB5YstCACPJcDiosxqPF_XklAKIoIggTx0">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Location;
