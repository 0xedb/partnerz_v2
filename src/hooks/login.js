import { useState, useEffect } from 'react'
import { CONSTANTS } from '../util/constants'
import { firebase } from '../util/firebase'

const { user } = CONSTANTS
const {
  init,
  email,
  external,
  direct,
} = CONSTANTS.login

export const useLogin = () => {
  const [loginKind, setLoginKind] = useState(init)
  useEffect(() => {
    if (
      firebase
        .auth()
        .isSignInWithEmailLink(
          window.location.href
        )
    ) {  
      setLoginKind(email)
      const userEmail = window.localStorage.getItem(
        user
      )
      
      if (!userEmail) { 
        // use external login
        setLoginKind(external)
      }
    } else {
      // redirect to home
      setLoginKind(direct)
    }
  },[])

  return loginKind
}
