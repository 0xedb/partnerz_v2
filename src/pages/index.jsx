import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Page from '../components/page/Page'
import IndexTop from '../components/index/IndexTop'
import HeadMeta from '../components/headmeta/HeadMeta'
import Stock from '../components/stock/Stock'
import TopContent from '../components/index/TopContent'
import IndexContent from '../components/index/IndexContent'

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
        <Stock />
        <IndexTop>
          <TopContent />
        </IndexTop>
        <IndexContent />
      </Page>
    </>
  )
}

export default Index
