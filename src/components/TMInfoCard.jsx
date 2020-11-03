import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { StateContext } from '../context';
import Divider from '@material-ui/core/Divider'
import CoachingModal from './CoachingModal'
import Grid from '@material-ui/core/Grid'
import {useParams} from 'react-router-dom'
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
  const {tmName} = useParams()
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const [activeTM, setActiveTM] = useState({})
  const [notes, setNotes] = useState([])
  const getConversations = async (id) => {
      const response = await fetch (`${serverUrl}/api/notes/${id}`)
      const notes = await response.json()
      setNotes(notes)
  }
  useEffect(()=>{
      (async function(){
        const response = await fetch(`${serverUrl}/api/teammember/${tmName}`)
        const tmData = await response.json()
        setActiveTM(tmData)
        getConversations(tmData.id)
      })();
  },[setActiveTM,getConversations]);
  const classes = useStyles();
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
        <Grid container justify="center" spacing={3}>
            {/* <Grid item xs={6}> */}
                <CoachingModal type={'tmview'}/>
            {/* </Grid> */}
            {/* <Grid item xs={6}> */}
                <Button variant="contained" color="primary" onClick={()=>_handleClick}>Recognize</Button>
            {/* </Grid> */}
        </Grid>
      </CardActions>
      
    </Card>
  );
}
