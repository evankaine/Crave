import { useState } from "react";
import axios from "axios";
import "./posts.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/table%201`;

export default function NewPost(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      status,
      genre,
    };
    const res = await axios.post(
      URL,
      { fields },
      {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      }
    );
    console.log(res);
    props.setToggle((current) => !current)
    setName("")
    setStatus("")
    setGenre("")
  };
  return (
    <div className="postComponent">
      
      <form className="postForm" onSubmit={handleSubmit}>
        <br />
      <div className="postContainer">
        <input className="postName"
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        
        <input className="postGenre"
          placeholder="Genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
          <br />
      </div>
      <div className="statusContainer">
        <input  className="postStatus"
          placeholder=""
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          />
        </div>
      <div className="buttonContainer">
        <button className="shareButton">Share</button>
      </div>
      </form>
    </div>
  )
};