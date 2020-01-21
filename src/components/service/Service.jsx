import React from 'react'
import {
  s_card,
  card,
  img,
} from './service.module.css'

const Service = ({ info, heading, pic }) => {
  return (
    <div className={card}>
      <img
        src={pic}
        alt={heading}
        className={img}
      />
      <h2>{heading}</h2>
      <div className={s_card}>
        <div>{info}</div>
      </div>
    </div>
  )
}

export default Service
