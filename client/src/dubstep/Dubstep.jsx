import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../posts/Posts"
import Timeline from '../timeline/Timeline'

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/table%201`;

export default function Dubstep(isDubstep) {
  const [dubstepData, setDubstepData] = useState([]);
  const [toggle, setToggle] = useState(false)


  

  useEffect(() => {
    fetchData();
  }, [toggle]);
  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    setDubstepData(res.data.records.filter((post) =>
    post.fields.genre === 'Dubstep'));
  };

  return (
    <div className="dubstepContainer">
      <Post isDubstep setToggle={setToggle}/>
      <Timeline isNotHome post={dubstepData} />
    </div>
  )
}
