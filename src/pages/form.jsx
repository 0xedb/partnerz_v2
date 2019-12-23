import React from 'react'
import LoginPage from '../components/loginpage/LoginPage'
import NavBar from '../components/navbar/NavBar';

const submitCallback = (values) =>
  new Promise((resolve, reject) => {
    if (values) resolve(values)
    else reject(new Error('values required'))
  })

function Form() {
  return (
    <>
      <NavBar />
      <LoginPage {...{ submitCallback }} />
    </>
  )
}

export default Form
