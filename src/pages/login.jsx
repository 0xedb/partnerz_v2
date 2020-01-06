import React, { useEffect, useState } from 'react'
import { useLogin } from '../hooks/login'

const login = () => {
  const loginType = useLogin() 
  console.log(loginType)
  return <div>aa</div>
}

export default login
