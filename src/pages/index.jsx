import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Page from '../components/page/Page'
import IndexTop from '../components/index/IndexTop'
import HeadMeta from '../components/headmeta/HeadMeta'
import Stack from '../components/stock/Stock'
import TopContent from '../components/index/TopContent'

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
        <IndexTop> 
          <TopContent />
          <Stack />
        </IndexTop>
      </Page>
    </>
  )
}

export default Index
