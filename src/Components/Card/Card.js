import React from 'react'
import './Card.css';


export default function Card(prop) {
  return (
    <div className='card-container'>
      <div className="card">
        <div className="card-header">
            <h3>{prop.category}</h3>
            <p>{prop.year}</p>
        </div>
        <hr />
        <div className="person-name">
            <h2>{prop.name}</h2>
            <p>{prop.share} Laureates for This Nobel Price</p>
        </div>
        <div className="price-for">
            <h3>Motivation :</h3>
            <p>{prop.motivation}</p>
        </div>
      </div>
    </div>
  )
}
