import React from 'react'

export function Weather(props) {
  return (
    <div className="infoWeath">
      {props.city && 
      <>
        <p>Location: {props.city}, {props.country}</p>
        <p>Temperature: {props.temp}</p>
        <p>Sunrise: {props.sunrise}</p>
      </>
      }
      <p className="error">{props.error}</p>
    </div>
  )
}
