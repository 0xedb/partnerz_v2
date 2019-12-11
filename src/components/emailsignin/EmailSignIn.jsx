import React from 'react'
import { useFormik } from 'formik'
import { Button } from 'baseui/button'

const validate = async values => {
  const errors = {}

  return errors
}

function EmailSignIn() {
  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: async values => {
      console.log(values)
    },
    validate,
  })

  return <Button>ddd</Button>
}

export default EmailSignIn
