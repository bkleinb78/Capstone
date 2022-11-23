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
            Authorization:  `Bearer ${JSON.parse(token)}`
          },
        });
        setEvents(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchEvents();
  }, [token])
  console.log(events);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization:  `Bearer ${JSON.parse(token)}`
          },
        });
        setCars(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchCars();
  }, [token])
  console.log(cars);

  return (
    <div className="container">
      <h2>Welcome to Wolfman's entrtainment and karaoke</h2>
    </div>
  );
};

export default HomePage;
