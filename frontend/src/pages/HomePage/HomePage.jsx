import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import "./HomePage.css";
import axios from "axios";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [cars, setCars] = useState([]);
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/events/", {
          headers: {
            Authorization:  "Bearer " + token,
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchEvents();
  }, [token]);
  console.log(events);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization:  "Bearer " + token,
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token]);

  return (
    <>
    <div className="container">
    <div className="services-container">
    <div class="box"></div>
    <div class="div">
      <span>Services Offered</span>
      <p>Wolfman Entertainment is a full service karaoke company servicing the north suburbs of Chicago.
      With over 60,000 songs in the collection and new ones added frequently, Brad Wolf hosts an entertaining evening.
      I added a top 5 song tracks on my events page for you to view.</p>
      </div>
    </div>
    <hr></hr>
      <div class="container-item">
        <div class="column">
          <h2>Music</h2>
          <p class="subtext">View the better books with many new songs!! Close to 60,000 unique songs to choose from. Let me know what your favorite brand is.</p>
        </div>
        <div class="column">
          <h2>Dancing</h2>
          <p class="subtext-1">There is plenty of dancing going on at Brads shows! With amazing lights, sound systems and energhy. Youll walk away satisified, happy and exhausted from the shaking going on!</p>
        </div>
        <div class="column">
          <h2>Cocktails</h2>
          <p class="subtext-2">Full bar anyone? Mixing the best drinks for you and your friends is just icing on the cake at Brads karaoke shows! You will have just enough liquid encouragement to get up on the stage and sing a song or two or atleast participate and shake those hips on the dance floor!</p>
        </div>
        </div>
        </div>
        <h2 class="karaoke">Karaoke</h2>
        <div class="sing">
          <img src="https://www.katiejoyce.com/x/cdn/?https://storage.googleapis.com/production-homestead-v1-0-0/350/648350/C4fIEYXC/2f9ad35c9a2f4bcbba074cb4ec4214ad" alt=""/>
        </div>
      </>
  );
};

export default HomePage;
