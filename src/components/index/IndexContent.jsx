import React from 'react'
import {
  main,
  firm,
} from './indexcontent.module.css'

const IndexContent = () => {
  return (
    <main className={main}>
      <div>
        Financial stability for everyone, by the
        experts
      </div>
      <div className={firm}>
        <div>
          <img
            src="https://api.iconify.design/vaadin:quote-left.svg"
            alt="quote"
          />
        </div>
        Partnerz FP is an advisory firm with a
        daring quest to use financial structures
        to affect lives positively. We are
        responsible for crafting world-class
        financial solutions that touches
        individuals, corporates, and governments.
      </div>
    </main>
  )
}

export default IndexContent
