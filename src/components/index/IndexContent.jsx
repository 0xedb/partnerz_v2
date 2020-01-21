import React from 'react'
import {
  main,
  firm,
  services,
} from './indexcontent.module.css'
import Service from '../service/Service'

const IndexContent = () => {
  return (
    <>
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
          to affect lives positively.We are
          responsible for crafting world - class
          financial solutions that touches
          individuals, corporates, and
          governments.
        </div>
      </main>
      <section id="services">
        <h2> services </h2>
        <div className={services}>
          <Service
            info={`Partnerz FP works with individual clients and 
            employers to deliver cut-through financial planning 
            services. We have been very instrumental in reshaping
             the lives of redundant bankers who suffered the 
             banking crises by helping them build emergency 
             funds beforehand.`}
          />
          <Service
            info={`Diasporians looking to invest in the service sectors 
            now have a trusted partner. We also saved GH₵1.6 million of clients
        money from the Menzgold-Bitcoin bust by asking them to 
        withdraw or sell off. We believe we owe our clients that 
        fiduciary responsibility`}
          />
          <Service
            info={`Currently working with 19 different 
            unions/associations/churches. With over 21,384 
            members under their belt, we are forgin a future
             for their membership using the very principles 
             of financial planning at a large scale.`}
          />
          <Service
            info={`Gradually, we are becoming a household name in the
             starup ecosystem in Ghana. We have advised 12+ startups 
             from ideation to funding, go-to-market strategies, and 
             to first 1000 customers.`}
          />
        </div>
      </section>
    </>
  )
}

export default IndexContent
