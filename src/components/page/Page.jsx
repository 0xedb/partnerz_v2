import React from 'react'
import HeadMeta from '../headmeta/HeadMeta'
import {app} from './page.module.css';

function Page({ meta, children }) {
  return (
    <>
      <HeadMeta>{meta}</HeadMeta>
      <div className={app}>{children}</div>
    </>
  )
}

export default Page
