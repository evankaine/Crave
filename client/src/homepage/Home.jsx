import { useState, useEffect } from "react";
import Timeline from '../timeline/Timeline'
import axios from "axios";
import "./home.css"


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/table%201`;

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
      <Timeline post={homeData} />
      
    </div>
  )
}
