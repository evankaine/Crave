import { useState } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;

export default function NewRecipe() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      image,
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <label>name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>genre</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br />
        <label>status</label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
        <br />
        <button>Share</button>
      </form>
    </div>
  )
};