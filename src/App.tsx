import React, { Suspense } from 'react'
import Navbar from 'components/Navbar'
import { Router } from '@reach/router'
import Header from './components/Header'

const Home = React.lazy(() => import('screens/Home'))
const Login = React.lazy(() => import('screens/Login'))

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Suspense fallback="Cargando">
        <Router>
          <Home path="/" />
          <Login path="/iniciar-sesion" />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
