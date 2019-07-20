import React, { Suspense } from 'react'
import Navbar from 'components/Navbar'
import { Router } from '@reach/router'

const Home = React.lazy(() => import('screens/Home'))

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Suspense fallback="Cargando">
        <Router>
          <Home path="/" />
        </Router>
      </Suspense>
    </div>
  )
}

export default App
