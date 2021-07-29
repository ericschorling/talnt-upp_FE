import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
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
          <CoachingModal 
            updateRows={props.updateConvos} 
            type={'Coaching'} 
            button={'tmview'} 
            tm={activeTM.id}
          />
          <CoachingModal 
            updateRows={props.updateConvos} 
            type={'Recognition'}
            button={'tmview'} 
            tm={activeTM.id}
          />
        </Grid>
      </CardActions>
      
    </Card>
  );
}
