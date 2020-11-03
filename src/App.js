import React, {useReducer} from 'react'
import {StateProvider} from './context'
import reducer from './reducers/reducer'
import './App.css';
import NavBar from './components/NavBar';
import {initialState} from './testState'
import HomeScreen from './components/HomeScreen';
import Profile from './components/Profile';
import {Route} from 'react-router-dom'
import LeaderView from './components/LeaderView';
import TMView from './components/TMView';
import {Switch} from 'react-router-dom'
import Loading from './components/Loading';
import {useAuth0} from '@auth0/auth0-react'
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const {isLoading} = useAuth0()

  return (
    <div className="App">

      <StateProvider value ={useReducer(reducer, initialState)}>
        <NavBar />
        {isLoading ?
        <Loading /> :
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/leader_view' component={LeaderView} />
          <ProtectedRoute path='/team/:tmName' component={TMView} />
        </Switch>
        }
      </StateProvider>

    </div>
  );
}

export default App;
