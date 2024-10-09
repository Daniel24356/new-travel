import  { useState } from "react";
import "./trip.css";
import Data from "../../../public/data.json";
import Vlog from "../../assets/header.jpg";
import Trip from "../../components/TriProps/Trip";
// import Rate1 from "../../assets/ratings/rating-40.png";
import Rate2 from "../../assets/ratings/rating-50.png";

const TripCatalog = () => {
  let imageStuff = "";
  // if(Data.rating === "4"){
  //   imageStuff = {Rate1}
  // }else if(Data.rating === "5"){
  //   imageStuff = {Rate2}
  // }
  
  //   Users should be able to sort the trip catalog based on various criteria, such
  // as price, popularity, or alphabetical order. Optionally, users should be able
  // to filter trips based on specific attributes on date, price range, destination
  // type, duration, and rating
  const [priceRange, setPriceRange] = useState("All");
  const [popularity, setPopularity] = useState("All");
  const [alphabetical, setAlphabetical] = useState("All");
  const [date, setDate] = useState("All");
  const [tripType, setTripType] = useState("All");
  const [duration, setDuration] = useState("All");
  const [rating, setRating] = useState("All");

    const priceRanges = [
    "Prices",
    "$500 - $1000",
    "$1000 - $2000",
    "$2000 - $3000",
    "$3000 - $4000",
    "$4000 - $5000",
    "$5000 - $6000",
    "$6000 - $7000",
    "$7000+"
  ];
  const alphabet = [
    "Alphabetical order",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];

  const dateRange = [
    
  ]

  const filteredPopularity = [
    "Popularity",
    ...new Set(Data.map((trip) => trip.popularity)),
  ];

  const filteredAlphabetical = ["Alphabet", ...new Set(Data.map(trip => trip.destination[0]))];

  const filteredDate = ["Dates", 
    ...new Set(Data.map((trip) => trip.date))
  ];
  const filteredTripType = [
    "Destination Type",
    ...new Set(Data.map((trip) => trip.destinationType)),
  ];
  const filteredDuration = [
    "Duration",
    ...new Set(Data.map((trip) => trip.duration)),
  ];
  const filteredRating = [
    "Ratings",
    ...new Set(Data.map((trip) => trip.rating)),
  ];

  const filterTrips = Data.filter((tour) => {
    const matchesAlphabet =
    alphabetical === "All" || tour.destination[0].toUpperCase() === alphabetical.toUpperCase();
    const matchesPopularity = 
    popularity !== "All" && tour.popularity === popularity;
    const matchesDate =
    date !== "All" && tour.date === date;
    const matchesTripType =
    tripType !== "All" && tour.destinationType === tripType;
    const matchesDuration =
    duration !== "All" && tour.duration === duration;
    const matchesRating =
    rating !== "All" && tour.rating === rating;

    const matchesPriceRange = (() => {
      switch (priceRange) {
        case "$500 - $1000":
          return tour.price >= 500 && tour.price <= 1000;
        case "$1000 - $2000":
          return tour.price > 1000 && tour.price <= 2000;
        case "$2000 - $3000":
          return tour.price > 2000 && tour.price <= 3000;
        case "$3000 - $4000":
          return tour.price > 3000 && tour.price <= 4000;
        case "$4000 - $5000":
          return tour.price > 4000 && tour.price <= 5000;
        case "$5000 - $6000":
          return tour.price > 5000 && tour.price <= 6000;
        case "$6000 - $7000":
          return tour.price > 6000 && tour.price <= 7000;
        case "$7000+":
          return tour.price > 7000;
        default:
          return true;
      }
    })();
   
    
    return matchesDate || matchesDuration || matchesPopularity || matchesPriceRange || matchesRating || matchesTripType || matchesAlphabet

  })

  return (
    <>
      <div className="tripDiv">
        <div
          className="tripHeader"
          style={{
            backgroundImage: `url(${Vlog})`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
            backgroundPosition: "bottom",
          }}
        >
          <div className="overlay">
            <h3>TOUR WITH US</h3>
          </div>
        </div>

        <div className="sort-cart">
          <p>
        <select
              id="option"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            >
              {filteredDate.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              {priceRanges.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={tripType}
              onChange={(e) => setTripType(e.target.value)}
            >
              {filteredTripType.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            >
              {filteredDuration.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {filteredRating.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={popularity}
              onChange={(e) => setPopularity(e.target.value)}
            >
              {filteredPopularity.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            <select
              id="option"
              value={alphabetical}
              onChange={(e) => setAlphabetical(e.target.value)}
            >
              {alphabet.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </p>
        </div>

        <div className="tripContent">
          <div className="beach-all">
            {filterTrips.map((location) => (
              // <Trip
              //   image={location.image}
              //   description={location.description}
              //   activities={location.activity}
              //   price={location.price}
              //   destination={location.destination}
              //   Popularity={location.popularity}
              //   rating={location.rating === "4" ? {Rate1} : {Rate1}}
              //   name={location.title}
              // />
              <Trip 
              image={Vlog}
              description= "Love Love Love Love Depression Depression Dpression Depression Depression." 
              activities= "Paragliding, Skiing, Paragliding,  Skiing"
              price="4500"
              destination= "Madagascar"
              Popularity= "Very Popular"
              rating= {Rate2}
              name = "Pack up that lingerie and tour feeling sexy"
              // function ={imageStuff}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TripCatalog;
