import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Page from '../components/page/Page'
import EmailSignIn from '../components/emailsignin/EmailSignIn'
import {CONFIG} from '../util/firebase'

const submitCallback = (values) =>
  new Promise((resolve, reject) => {
    if (values) resolve(values)
    else reject(new Error('values required'))
  })

function Form() {
  return (
    <>
      <Page>
        <NavBar />
        <EmailSignIn {...{ submitCallback }} />
        {console.log(CONFIG)}
      </Page>
    </>
  )
}

export default Form
