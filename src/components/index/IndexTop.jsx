import React from 'react'
import { content } from './indextop.module.css'
import Stock from '../stock/Stock'

function IndexTop({ children }) {
  return (
    <div className={content}> {children} </div>
  )
}

export default IndexTop
