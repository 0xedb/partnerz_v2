import React, { useEffect, useState } from 'react'
import { useLogin } from '../hooks/login'
import Page from '../components/page/Page'
import EmailSignIn from '../components/emailsignin/EmailSignIn'
import {
  Notification,
  KIND,
} from 'baseui/notification'

const SignIn = (
  // add callback to emailsign in
  <Page>
    <EmailSignIn
      toast={
        <Notification
          kind={KIND.warning}
          closeable
          autoHideDuration={5000}
          overrides={{
            Body: {
              style: {
                width: 'auto',
                textAlign: 'center',
              },
            },
          }}
        >
          {() => 'Enter email again to login'}
        </Notification>
      }
    />
  </Page>
)

const login = () => {
  const loginType = useLogin()
  const [nextPage, setNextPage] = useState(null)
  useEffect(() => {
    switch (loginType.description) {
      case 'email': {
        window.location.replace('/form/fill')
        break
      }
      case 'external': {
        setNextPage(SignIn)
        break
      }
      case 'direct': {
        window.location.replace('/')
        break
      }
      case 'init': {
        break
      }

      default: {
        setNextPage(<></>)
        break
      }
    }
  }, [loginType])

  return <div>{nextPage}</div>
}

export default login
