import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'

const CONFIG = {
  apiKey: process.env.GATSBY_API_KEY,
  authDomain: process.env.GATSBY_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_DB_URL,
  projectId: process.env.GATSBY_PROJECT_ID,
  storageBucket: process.env.GATSBY_STORE_BUCKET,
  messagingSenderId:
    process.env.GATSBY_MSG_SENDER,
  appId: process.env.GATSBY_APP_ID,
  measurementId:
    process.env.GATSBY_MEASUREMENT_ID,
}

if (!firebase.apps.length) {
  firebase.initializeApp(CONFIG)
}

const actionCodeSettings = {
  url: process.env.GATSBY_LOGIN_URL,
  handleCodeInApp: true,
}

const sendEmail = async (email, handlers) => {
  firebase
    .auth()
    .sendSignInLinkToEmail(
      email,
      actionCodeSettings
    )
    .then(handlers.success())
    .catch((err) => handlers.failure(err))
}

export { sendEmail }
