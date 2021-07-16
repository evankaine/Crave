import { useState, useEffect } from "react";
import axios from "axios";
import "./events.css"

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/table%201`;

export default function Events() {
  const [eventData, setEventData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    console.log(res.data.records);
    setEventData(res.data.records);
  };

  return (
    <div className="eventsContainer">
    Events
    </div>
  )
}
