import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typgraphy from '@material-ui/core/Typography'
import { RouteComponentProps } from '@reach/router'

import batman from 'images/batman.jpg'

const useStyles = makeStyles({
  heroImage: {
    backgroundImage: `url(${batman})`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    height: 400,
  },
})

export default function Home(props: RouteComponentProps) {
  const styles = useStyles()
  return (
    <div>
      <div className={styles.heroImage}></div>
      <Container fixed>
        <Grid container spacing={4} direction="row">
          <Grid item>
            <Typgraphy variant="h4">Todos las entradas van al pool</Typgraphy>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
