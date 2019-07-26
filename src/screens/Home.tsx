import React from 'react'
import { firestoreConnect } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typgraphy from '@material-ui/core/Typography'
import { RouteComponentProps } from '@reach/router'
import get from 'lodash/get'

import batman from 'images/batman.jpg'

const useStyles = makeStyles({
  heroImage: {
    backgroundImage: `url(${batman})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    height: 400,
  },
})

interface HomeProps extends RouteComponentProps {
  leagues: any
}

function Home(props: RouteComponentProps) {
  const styles = useStyles()
  return (
    <div>
      <div className={styles.heroImage}></div>
      <Container fixed>
        <Grid container spacing={4} direction="row">
          <Grid item>
            <Typgraphy variant="h4">
              Juega en maggotstore y llevate increibles premios
            </Typgraphy>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  leagues: get(state, 'firestore.data.leagues', {}),
})

export default compose(
  firestoreConnect(['leagues']),
  connect(mapStateToProps)
)(Home) as React.FC<RouteComponentProps>
