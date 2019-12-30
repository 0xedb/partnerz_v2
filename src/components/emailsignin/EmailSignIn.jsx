import React, { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import ErrorMessage from './ErrorMessage'
import {
  form,
  form_container,
  notification_container,
  sign_in,
} from './emailsignin.module.css'
import { centered } from '../../assets/css/app.module.css'
import { Input } from 'baseui/input'
import { Button } from 'baseui/button'
import { ArrowRight } from 'baseui/icon'
import {
  Notification,
  KIND,
} from 'baseui/notification'

const validate = async (values) => {
  const errors = {}
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  if (!values.email) errors.email = '* required'
  else if (
    !EMAIL_REGEX.test(values.email.toLowerCase())
  )
    errors.email = '* invalid email'
  return errors
}

function EmailSignIn({ submitCallback }) {
  const [
    showNotification,
    setShowNotification,
  ] = useState(false)

  const notification = (
    <Notification
      closeable
      kind={KIND.positive}
      autoHideDuration={5000}
      className={notification_container}
      overrides={{
        Body: {
          style: {
            width: 'auto',
            textAlign: 'center',
          },
        },
      }}
      onClose={() => {
        setShowNotification(false)
        console.log('notification closed')
      }}
    >
      login link has been sent to your email
    </Notification>
  )

  const formik = useFormik({
    initialValues: { email: '' },
    onSubmit: async (values) => {
      submitCallback(values)
        .then(() => {
          console.log(values)
          setShowNotification(true)
          formik.resetForm()
        })
        .catch((err) => console.log(err))
    },
    validate,
  })

  const handleFormSubmission = () => {
    formik
      .submitForm()
      .catch((err) => console.log(err))
  }

  return (
    <div className={`${sign_in} ${centered}`}>
      <div className={form_container}>
        <div>
          {showNotification ? notification : null}
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className={`${form}`}
        >
          <Input
            name="email"
            type="email"
            placeholder="example@example.com"
            startEnhancer="@"
            {...formik.getFieldProps('email')}
          />

          <Button
            type="button"
            onClick={handleFormSubmission}
          >
            login <ArrowRight />
          </Button>
        </form>
        <ErrorMessage
          err={
            formik.touched.email &&
            formik.errors.email
              ? formik.errors.email
              : null
          }
        />
      </div>
    </div>
  )
}

export default EmailSignIn
