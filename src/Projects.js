import {
  Card,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Image from 'next/image';
import { useRef } from 'react';
import useAnimate from './useAnimate';

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
		width: 200,
    height: 100,
		display: 'flex',
		justifyContent: 'center'
  },
}));

export default function Projects({ data }) {
  const classes = useStyles();

  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Grid
      direction="row-reverse"
      container
      justify="center"
      alignItems="center"
      spacing={10}
      className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
          Projects
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: '250ms' }}>
            <div>
              <Image
                alt="Projects"
                src="/projects.svg"
                width="1144"
                height="617.32"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid container item xs={12} lg={6} direction="row" spacing={1}>
        {!!data &&
          data.map((v, i) => (
            <Grid item sm={6} xs={12} key={i}>
              <Fade in={animate} style={{ transitionDelay: `${200 * i}ms` }}>
                <Card key={i} className={classes.card}>
									<img src={`/project-${i+1}.jpg`} style={{objectFit: 'cover'}} alt="Landing" />
                </Card>
              </Fade>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}
