import React from 'react'
import "./concerts.css"

export default function Concerts() {
  return (
    <div className="concertContainer">
      
      <h3 className="concertMessage">
        <span className="comingSpan">Coming</span>
        <span className="soonSpan">Soon.</span>
      </h3>

      <a href="https://edmtrain.com/"
        target="_blank"
        rel="noreferrer"
      >
      <img className="edmTrainLogo"
        src={`https://edmtrain.s3.amazonaws.com/img/logo/logo-web.svg`}
        alt="EDMTRAIN LOGO"
      />
      </a>
      <p className="edmTrainText">EDMTrain concert data</p>
      <hr className="navbarHr"/>
    </div>
  )
}
