import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import CoachingView from './CoachingView'
import TMInfoCard from './TMInfoCard';
import RecognitionView from './RecognitionView';


export default function TMView() {
    
    return (
    
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md" style={{marginTop:"10px"}}>
        <Typography 
            component="div" 
            style={{
                marginTop:"10px", 
                backgroundColor: 'white', 
                height: '100%', 
                borderRadius: "10px"
                }}
            >
            <Grid container spacing={0}>
                <Grid item xs={12}>
                    <TMInfoCard />
                </Grid>
                <Grid item xs={12}>
                    <CoachingView />
                </Grid>
                <Grid item xs={12}>
                    <RecognitionView />
                </Grid>
            </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
}