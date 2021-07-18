import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./poll.css"


const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/poll`;

function Counter(props) {
  const [disable, setDisable] = React.useState(false)
  const [countDubstep, setCountDubstep] = useState(1);
  const [countHouse, setCountHouse] = useState(1);
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(URL, {
      headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
    });
    const countData = res.data.records;
    const [house, dubstep] = countData
    
    setCountHouse(house.fields);
    setCountDubstep(dubstep.fields)
  };


  const handleUpdate = async (event) => {
    event.preventDefault()
    console.log(event.target.textContent)
    let newVotes
    let pollUrl
    if (event.target.textContent === countHouse.category) {
      pollUrl = `${URL}/recDSl8LItux9S9Cv`
      newVotes = countHouse.votes + 1

    } else {
      pollUrl = `${URL}/recp7K2n6h12K7imj`
      newVotes = countDubstep.votes + 1

    }

    const updateVotes = {
      category: event.target.textContent,
      votes: newVotes}
    
    const res = await axios.put(
      pollUrl,
      {fields: updateVotes},
      { headers: { Authorization: `Bearer ${AIRTABLE_KEY}` } },
    )
    // console.log(res)
    fetchData()
    setDisable()
}

  return (
    <div className="pollContainer">
      <h4 className="voteText">Vote For Your <br /> Favorite Genre</h4>

      <div className="pollCount">

        <div className="dubstepCount">
          <h4>{countDubstep.votes}</h4>

        </div>
        <div className="dubstepButton">
          <button
            disabled={disable}
            onClick={(event) =>
            {handleUpdate(event);
            setDisable(true);}}>
            Dubstep
          </button>
        </div>

        <div className="houseCount">
          <h4>{countHouse.votes}</h4>
        </div>

        <div className="houseButton">
          <button
            disabled={disable}
            onClick={(event) =>
            {setDisable(true);
            handleUpdate(event);}}>
            House
          </button>
        </div>
      </div>
    </div>
  
  );
}
export default Counter;