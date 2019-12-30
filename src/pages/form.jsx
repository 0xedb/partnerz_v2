import React from 'react'
import NavBar from '../components/navbar/NavBar'
import Page from '../components/page/Page'
import EmailSignIn from '../components/emailsignin/EmailSignIn'
import { sendEmail } from '../util/firebase'

const submitCallback = (values) =>
  new Promise((resolve, reject) => {
    if (values) {
      resolve('')
      
      window.localStorage.setItem(
        'partnerz_user',
        btoa(values.email)
      )
    } else reject(new Error('values required'))
  })

function Form() {
  return (
    <>
      <Page>
        <NavBar />
        <EmailSignIn {...{ submitCallback }} />
      </Page>
    </>
  )
}

export default Form
