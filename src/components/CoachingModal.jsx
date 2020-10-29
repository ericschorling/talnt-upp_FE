import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { StateContext } from '../context';
import Divider from '@material-ui/core/Divider'
import FactorSelector from './FactorSelector';
import Grid from '@material-ui/core/Grid'

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('')
  const [value, dispatch] = useContext(StateContext)
  const {name} = value
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [input, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const _handleDateSelect = (date) => {
      console.log(date)
      let sendDate = new Date(date)
      let returnDate = sendDate.toDateString()
      console.log(returnDate)
      setDate(returnDate)
  }

  const _handleAddCoaching = async()=>{
      console.log(input, "clicked")
      const newActive = {...value.activeTM}
      newActive.coachingnotes = [...newActive.coachingnotes, {
            enteringLeaderID: name,
            coachingDate: date,
            talentGroup: 'Safety',
            notetype: 'Coaching',
            note: input,}]
      newActive.coaching += 1
      await dispatch({type:"ADD_COACHING_NOTE", note: newActive})
      console.log(value.activeTM.coachingnotes, value.activeTM.coaching)
      setOpen(false)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Enter Coaching Note</h2>
      <form>
        <Grid container spacing={3} >
                <Grid item xs={6}>
                    <TextField
                        id="date"
                        label="Coaching Date"
                        type="date"
                        
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={(e)=>_handleDateSelect(e.target.value)}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FactorSelector />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Coaching Note"
                        multiline
                        rows={4}
                        defaultValue="Enter new note"
                        variant="outlined"
                        style={{
                            width:"100%"
                        }}
                        onChange={(e)=>handleChange(e)}
                        />
                </Grid>
                <Grid item xs={3}>
                    <Button 
                        type="button" 
                        variant="contained" 
                        color="primary" 
                        onClick={()=>_handleAddCoaching()}
                    >
                        Submit
                    </Button>
                </Grid>
            </Grid> 
      </form>
      
    </div>
  );

  return (
    <div>
      <Button type="button" variant="contained" color="primary" onClick={handleOpen}>
        Coach
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
