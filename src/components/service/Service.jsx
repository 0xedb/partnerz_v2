import React from 'react'
import { Card, StyledBody } from 'baseui/card'
import { s_card } from './service.module.css'

const Service = ({info}) => {
  return (
    <Card>
      <div className={s_card}>
        <StyledBody>
          {info}
        </StyledBody>
      </div>
    </Card>
  )
}

export default Service
