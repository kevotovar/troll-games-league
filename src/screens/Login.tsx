import React from 'react'
import { connect } from 'react-redux'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'
import { redirectTo, RouteComponentProps } from '@reach/router'
import Button from '@material-ui/core/Button'

interface LoginProps {
  firebase: any
  auth: any
}

function Login({ firebase, auth }: LoginProps) {
  function loginWithFacebook() {
    return firebase.login({ provider: 'facebook', type: 'redirect' })
  }
  if (isLoaded(auth)) {
    if (isEmpty(auth)) {
      return (
        <Button color="primary" onClick={loginWithFacebook}>
          Iniciar sesion con Facebook
        </Button>
      )
    } else {
      return redirectTo('/')
    }
  } else {
    return <div>cargando</div>
  }
}

const mapStateToProps = ({ firebase }: any) => ({
  auth: firebase.auth,
})

export default withFirebase(connect(mapStateToProps)(Login as any)) as React.FC<
  RouteComponentProps
>
