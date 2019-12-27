import React from 'react'
import { app } from './page.module.css'

function Page({ children }) {
  return <div className={app}> {children} </div>
}

export default Page
