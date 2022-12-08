import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePage = () => {
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
    <div className="container">
      <h1>Services</h1>
      Wolfman Entertainment is a full service karaoke company servicing the north suburbs of Chicago.
      With over 60,000 songs in the collection and new ones added frequently, Brad Wolf hosts an entertaining evening.
      I added a top 5 song tracks on my events page for you to view.
    </div>
  );
};

export default HomePage;
