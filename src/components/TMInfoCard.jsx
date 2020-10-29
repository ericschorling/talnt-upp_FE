import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StateContext } from '../context';
import Divider from '@material-ui/core/Divider'
import CoachingModal from './CoachingModal'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function TMInfoCard() {
  const[value] = useContext(StateContext)
  const classes = useStyles();
  const {activeTM} = value
  let modal = false;
  const _handleClick = () => {
    console.log('clicked')
    modal = true
    console.log(modal)
    //show a card with form to enter a coaching or recognition note
}
  return (
    <Card className={classes.root}>
      <CardContent className={classes.details}>
      <div className={classes.column}/>
      <div className={classes.column}>
        <Typography variant="h5" component="h2">
          {activeTM.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {activeTM.department}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date of Hire: {activeTM.doh.toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          Coachings: {activeTM.coaching}
          <Divider />
          Recognition: {activeTM.recognition}
          <Divider />
          Step: {activeTM.step}
          <Divider />
        </Typography>
        </div>
      </CardContent>
      <CardActions>
        <CoachingModal />
        <Button variant="contained" color="primary" onClick={()=>_handleClick}>Recognize</Button>
      </CardActions>
      
    </Card>
  );
}
