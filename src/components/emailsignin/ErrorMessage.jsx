import React from 'react'
import {
  div,
  error,
} from './errormessage.module.css'
import { centered } from '../../assets/css/app.module.css'

function ErrorMessage({ err }) {
  return (
    <div
      className={`${div} ${centered} ${
        err ? error : ''
      }`}
    >
      {err ? err : null}
    </div>
  )
}

export default ErrorMessage
