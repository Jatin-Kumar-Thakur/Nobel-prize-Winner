import React from 'react'
// import { useEffect, useState } from 'react'
import Card from '../Card/Card';
import './ApiData.css';

export default function Apidata(prop) {
  return (
    <div className='person-cards'>
      {
        prop.value.map((award) => (
          award.laureates ? award.laureates.map((person) => (
            <Card key={person.id} category={award.category} year={award.year} 
            name={person.firstname + person.surname} share={person.share} motivation={person.motivation} />
          )) : ""
        ))
      }
    </div>
  )
}
