import React, { useEffect, useState } from 'react'
import { useLogin } from '../hooks/login'

const login = () => {
  const loginType = useLogin() 
  const [nextPage, setNextPage] = useState(null)

  // useEffect(() => {

  // })

  console.log(loginType)
  return <div>{loginType.description}</div>
}

export default login
