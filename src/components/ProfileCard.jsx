import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { StateContext } from "../context";
import {useContext} from 'react'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import ProfileUpdateForm from "./ProfileUpdateForm";

const useStyles = makeStyles((theme) => ({
    root:{

    },
    grid: {
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    container: {
        padding: theme.spacing(1),
    },
    divider: {
        backgroundColor: 'black',
    }
}))

const ProfileCard = () => {
  const { user } = useAuth0();
  const { picture, email} = user;
  const [value] = useContext(StateContext)
  const {name, company, suporg, team} = value.user
  const classes = useStyles();
  return (
      <>
      <Container className={classes.container} maxWidth="sm">
        <Card >
            <Grid container spacing={3}>
                <Grid item className={classes.grid} xs={12}>
                    <img
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                    />
                    
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.divider} variant="middle" />
                </Grid>
                <Grid item className={classes.grid} xs={12}>
                    <h2>{name}</h2>
                    <p className="lead text-muted">{email}</p>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.divider} variant="middle" />
                </Grid>
                <Grid item className={classes.grid} xs={12}>
                    <p>Company: {company}</p>
                    <p>Team: {team}</p>
                    <p>Department: {suporg[0]}</p>
                </Grid>
                <Grid item xs={12}>
                    <Divider className={classes.divider} variant="middle" />
                </Grid>
                <Grid item className={classes.grid} xs={12}>
                    <Button variant="contained" color="primary">Update</Button>
                </Grid>
                <Grid item className={classes.grid} xs={12}>
                    <div></div>
                </Grid>
            </Grid>
        </Card>
      </Container>
      <ProfileUpdateForm />
      </>
  );
};

export default ProfileCard;
