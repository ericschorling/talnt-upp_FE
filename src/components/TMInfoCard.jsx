import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import CoachingModal from './CoachingModal'
import Grid from '@material-ui/core/Grid'

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

export default function TMInfoCard(props) {
  
  const classes = useStyles();
  const _handleClick = () => {
    console.log('clicked')
    //show a card with form to enter a coaching or recognition note
    }
  const {activeTM, cNotes, rNotes} = props

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
          Date of Hire: {activeTM.doh}
        </Typography>
        <Typography variant="body2" component="p">
          Coachings: {cNotes.length}
        </Typography>
          <Divider />
        <Typography variant="body2" component="p">
          Recognition: {rNotes.length}
        </Typography>
          <Divider />
        <Typography variant="body2" component="p">
          Step: {activeTM.step}
        </Typography>
          <Divider />
        
        </div>
      </CardContent>
      <CardActions>
        <Grid container justify="center" spacing={3}>
            {/* <Grid item xs={6}> */}
                <CoachingModal type={'Coaching'}button={'tmview'} tm={activeTM.id}/>
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
                <Button variant="contained" color="primary" onClick={()=>_handleClick}>Recognize</Button>
            {/* </Grid> */}
        </Grid>
      </CardActions>
      
    </Card>
  );
}
