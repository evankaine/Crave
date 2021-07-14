import { useState, useEffect } from "react";
import Timeline from '../timeline/Timeline'
import Post from "../posts/Posts"
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/homepage`;

export default function Home() {
  const [homeData, setHomeData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    console.log(res.data.records);
    setHomeData(res.data.records);
  };
  return (
    <div>
      <Post />
      <Timeline />
    </div>
  )
}
