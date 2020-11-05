import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import CoachingView from './CoachingView'
import TMInfoCard from './TMInfoCard';
import RecognitionView from './RecognitionView';
import {StateContext} from '../context'


export default function TMView() {
    const {tmName} = useParams()
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const [activeTM, setActiveTM] = useState({})
    const [rNotes, setNotes] = useState([])
    const [cNotes, setCNotes] = useState([])
    const [value] = useContext(StateContext)

    const getConversations = async (id) => {
      const response = await fetch (`${serverUrl}/api/notes/${id}`)
      const notes = await response.json()
      let cNotes = notes.filter(note=>note.notetype === 'Coaching')
      let rNotes = notes.filter(note=>note.notetype === 'Recognition')
      setCNotes(cNotes)
      setNotes(rNotes)
    }
  useEffect(()=>{
      (async function(){
        const response = await fetch(`${serverUrl}/api/teammember/${tmName}`)
        const tmData = await response.json()
        console.log(tmData)
        setActiveTM(tmData[0])
        getConversations(tmData[0].id)
      })();
  },[setActiveTM]);
  console.log(value.user.name)
    return (
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
                    <TMInfoCard activeTM={activeTM} rNotes={rNotes} cNotes = {cNotes}/>
                </Grid>
                <Grid item xs={12}>
                    <CoachingView coachingnotes={cNotes} />
                </Grid>
                <Grid item xs={12}>
                    <RecognitionView recognitionNotes={rNotes}/>
                </Grid>
            </Grid>
        </Typography>
      </Container>
  );
}