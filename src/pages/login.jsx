import React, { useEffect, useState } from 'react'
import { useLogin } from '../hooks/login'

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
        setNextPage(<h1>hello</h1>)
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
