import React from 'react'
import {
  content,
  container,
  info,
  filter,
} from './topcontent.module.css'
import { useLozad } from '../../hooks/lozad'
import background_mob from '../../assets/images/img/main_bg_mob.jpg'
import background_desk from '../../assets/images/img/main_bg_desk.jpg'

const TopContent = () => {
  useLozad()
  return (
    <div className={container}>
      <picture
        className="lozad"
        data-alt="background image"
      >
        <source
          srcset={background_desk}
          media="(min-width: 750px)"
        />
        <source
          srcset={background_mob}
          media="(min-width: 0px)"
        />
      </picture>

      <section className={info}>
        <div>mizess</div>
      </section>
    </div>
  )
}

export default TopContent
