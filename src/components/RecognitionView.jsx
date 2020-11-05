import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CoachingView(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Recognition</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {props.recognitionNotes ? props.recognitionNotes.map((convo, index)=>(
                        <Paper key={index} style={{border:"1px solid rgba(0,0,0,0.12)"}}className={classes.paper}>
                            <Grid container justify="space-evenly" spacing={3} >
                                    <Grid item xs={4}>
                                        Leader: {convo.enteringLeaderID}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Date: {convo.coachingDate ? convo.coachingDate: null}
                                    </Grid>
                                    <Grid item xs={4}>
                                        Perf. Factor: {convo.talentGroup}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                    <Grid item xs={12}>
                                        Note: {convo.note}
                                    </Grid> 
                            </Grid>
                        </Paper>
                    )):null}
                </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
