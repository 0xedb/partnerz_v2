import React from 'react'
import Page from '../page/Page'
import EmailSignin from '../emailsignin/EmailSignIn'
import {sign_in} from './loginpage.module.css';
import {centered} from '../../assets/css/app.module.css'


function LoginPage({ submitCallback }) {
  return (
    <Page>
      <div className={`${centered} ${sign_in}`}>
        <EmailSignin {...{submitCallback}} />
      </div>
    </Page>
  )
}

export default LoginPage
