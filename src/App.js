import React, {useReducer} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
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
function App() {
  return (
    <div className="App">
      <Router>
        <StateProvider value ={useReducer(reducer, initialState)}>
          <NavBar />
            <>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path='/profile'>
                <Profile />
              </Route>
              <Route exact path='/leader_view'>
                <LeaderView />
              </Route>
              <Route path='/team/:name'>
                <TMView />
              </Route>
            </>
        </StateProvider>
      </Router>
    </div>
  );
}

export default App;
