import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {testData} from '../testState'
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

export default function RecognitionView() {
  const classes = useStyles();
  const {recognitionNotes} = testData.teammembers[0]
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
                    {recognitionNotes ? recognitionNotes.map((convo, index)=>{
                        return <Paper key={index} className={classes.paper}>{convo.note}</Paper>
                    }):null}
                    
                </Grid>
            </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
