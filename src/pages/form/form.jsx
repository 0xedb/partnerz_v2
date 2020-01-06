import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import Page from '../../components/page/Page'
import EmailSignIn from '../../components/emailsignin/EmailSignIn'
import { sendEmail } from '../../util/firebase'
import { CONSTANTS } from '../../util/constants'

const submitCallback = (values) => {
  if (values) {
    return sendEmail(values.email)
  } else {
    return Promise.reject('values required')
  }
}

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
