import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/Table%201`;

export default function House() {
  const [houseData, setHouseData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    console.log(res.data.records);
    setHouseData(res.data.records);
  };

  return (
    <div>
    this is house
    </div>
  )
}
