import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { RouteComponentProps } from '@reach/router'

import batman from 'images/batman.jpg'

const useStyles = makeStyles({
  heroImage: {
    backgroundImage: `url(${batman})`,
    backgroundPosition: 'center',
    height: 400,
  },
})

export default function Home(props: RouteComponentProps) {
  const styles = useStyles()
  return (
    <div>
      <div className={styles.heroImage}></div>
    </div>
  )
}
