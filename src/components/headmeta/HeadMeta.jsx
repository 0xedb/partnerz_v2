import React from 'react'
import Helmet from 'react-helmet'

function HeadMeta({ children }) {
  return (
    <>
      <Helmet>
        <meta name="author" content="Bruno Edoh" />
        {children}
      </Helmet>
    </>
  )
}

export default HeadMeta 
