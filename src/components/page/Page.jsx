import React from 'react'
import HeadMeta from '../headmeta/HeadMeta'

function Page({ meta, children }) {
  return (
    <>
      <HeadMeta>{meta}</HeadMeta>
      <div>{children}</div>
    </>
  )
}

export default Page
