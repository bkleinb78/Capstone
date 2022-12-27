import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import "./Events.css";
import axios from "axios";
import { resolvePath } from "react-router-dom";

const Events = () => {
  const [user, token] = useAuth();
  const [events, setEvents] = useState([]);
  const [tracks, setMusic] = useState([]);

  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [genre, setGenre] = useState();
  const [release_date, setRelease_date] = useState();
  const addEvent = async() =>{
    let response  = await axios.post("http://127.0.0.1:8000/api/events/", {name, address, date, time});
    setEvents([...events, response.data]);
  }

  const addTrack = async() => {
    let response  = await axios.post("http://127.0.0.1:8000/api/music/", {title, artist, album, genre, release_date});
    setMusic([...tracks, response.data]);
    // console.log(response.data);
  }

  useEffect(() => {
    getAllEvents();
  }, []);

  async function getAllEvents() {
    let response = await axios.get("http://127.0.0.1:8000/api/events/");
    setEvents(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getAllMusic();
  }, []);

  async function getAllMusic() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setMusic(response.data);
  }

  return (
    <div className="EventsPage">
      <div className="background-color"></div>
      <div className="events">
        <h3>Available Events :</h3>
        <div className="events_container">
          {events?.map((event, index) => (
            <div className="event-grid" key={index}>
              <h4 className="event_name">{event.name}</h4>
              <p className="event_address">{event.address}</p>
              <p className="event_date">{event.date}</p>
              <p className="event_time">{event.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="tracks">
        <h3>Available Top 5 Tracks :</h3>
        <div className="track_container">
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
        {user&&(user.id===1&&<div>
          <div>
            
              <div className="cf">
                <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} value={name} name="event_name" />
                <input type="text" placeholder="address" onChange={(e)=>setAddress(e.target.value)} value={address} name="event_address" />
                <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)} value={date} name="event_date" />
                <input type="time" placeholder="time" onChange={(e)=>setTime(e.target.value)} value={time} name="event_time" />
              </div>
              <button onClick={addEvent}>Add Events</button>
            
          </div>        
          <div>
            
              <div className="cf">
                <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} value={title} name="track_title" />
                <input type="text" placeholder="Artist" onChange={(e)=>setArtist(e.target.value)} value={artist} name="track_artist" />
                <input type="text" placeholder="Album" onChange={(e)=>setAlbum(e.target.value)} value={album} name="track_album" />
                <input type="text" placeholder="Genre" onChange={(e)=>setGenre(e.target.value)} value={genre} name="track_genre" />
                <input type="date" placeholder="Date" onChange={(e)=>setRelease_date(e.target.value)} value={release_date} name="track_release_date" />
              </div>
              <button onClick={addTrack}>Add Track</button>
            
          </div>
          
        </div>)}
      </div>
    </div>
  );
};

export default Events;
