import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Page from '../components/page/Page'
import IndexTop from '../components/index/IndexTop'
import HeadMeta from '../components/headmeta/HeadMeta'

function Index() {
  return (
    <>
      <HeadMeta>
        <title>
          Partnerz FP Limited | Your Financial
          Architects
        </title>
      </HeadMeta>
      <Page>
        <NavBar />
        <IndexTop />
      </Page>
    </>
  )
}

export default Index
