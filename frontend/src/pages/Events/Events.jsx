import React, { useState } from "react";
import { useEffect } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [tracks, setTracks] = useState([]);

  // const fakeEvents = [

  //   {
  //     name: "Event 1",
  //     address: "123 usa",
  //     date: "10/10/2010",
  //     time: "20 min",
  //   },
  //   {
  //     name: "Event 2",
  //     address: " sdfhh usa",
  //     date: "10/10/2010",
  //     time: "20 min",
  //   },
  // ];

  // const fakeTracks = [
  //   {
  //     title: "Track 1",
  //     artist: "John",
  //     album: "album 1",
  //     genre: "genre 1",
  //     release_date: "10/10/2010",
  //   },
  //   {
  //     title: "Track 1",
  //     artist: "John",
  //     album: "album 1",
  //     genre: "genre 1",
  //     release_date: "10/10/2010",
  //   },
  //   {
  //     title: "Track 1",
  //     artist: "John",
  //     album: "album 1",
  //     genre: "genre 1",
  //     release_date: "10/10/2010",
  //   },
  //   {
  //     title: "Track 1",
  //     artist: "John",
  //     album: "album 1",
  //     genre: "genre 1",
  //     release_date: "10/10/2010",
  //   },
  // ];

  const baseUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    const getEvents = async () => {
      const res = await fetch(`${baseUrl}/events`);
      const json = await res.json();
      setEvents(json);
    };
    const getTracks = async () => {
      const res = await fetch(`${baseUrl}/music`);
      const json = await res.json();
      setTracks(json);
    };
    getEvents();
    getTracks();
  }, []);

  return (
    <div className="EventsPage">
      <div className="events">
        <h3>Available events :</h3>
        <div className="events_container">
          {events?.map((event, index) => (
            <div className="event" key={index}>
              <h4 className="event_name">{event.name}</h4>
              <p className="event_address">{event.address}</p>
              <p className="event_date">{event.date}</p>
              <p className="event_time">{event.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tracks">
        <h3>Available tracks :</h3>
        <div className="tracks_container">
          {tracks?.map((track, index) => (
            <div className="track" key={index}>
              <h4 className="track_title">{track.title}</h4>
              <p className="track_artist">{track.artist}</p>
              <p className="track_album">{track.album}</p>
              <p className="track_date">{track.release_date}</p>
              <p className="track_genre">{track.genre}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;