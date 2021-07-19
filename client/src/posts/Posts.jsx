import { useState } from "react";
import axios from "axios";
import "./posts.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/table%201`;

export default function NewPost(props) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  

  const whichPage = () => {
    if(props.isHouse) {
    return 'House'
    } else if (props.isDubstep) {
    return 'Dubstep'
    } else {
    return ""
    }
  }
  const [genre, setGenre] = useState(whichPage());

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
          maxLength="8"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
          
        <div className="postGenre"/>
        
      </div>
      <div className="statusContainer">
        <input  className="postStatus"
          placeholder="Make A Post..."
          type="text"
            value={status}
            maxLength="35"
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