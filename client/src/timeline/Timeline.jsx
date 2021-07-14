
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../timeline/timeline.css"


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/homepage`;


export default function Timeline() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    console.log(res.data.records);
    setPost(res.data.records);
  };
  return (
    <div className="timelineContainer">
      {post.map((post) => {
        return (
          <div>
          <Link to={`/post/${post.id}`} key={post.id}>
            <img src={post.fields.image} alt={post.fields.name} />
            <h3>{post.fields.name}</h3>
          </Link>
          <Link to="/House">
            <p>{post.fields.genre}</p>
          </Link>  
            <p>{post.fields.status}</p>
          </div>
        );
      })}
    </div>
  );
}