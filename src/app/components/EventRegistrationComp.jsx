import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import axios from 'axios';

import EventRegFormComp from './EventRegFormComp.jsx';
import styles from '../css';

export default class EventRegistrationComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }
  componentWillMount() {
    axios.get('/userProfile/loadUserData').then((response) => {
      if (response.data.authenticated === false) {
        window.sessionStorage.setItem("authenticated", false);
        window.location = "/";
      }
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });;
  }
  render() {
    const {user} = this.state;
    return (<div>
      <RaisedButton containerElement={<Link to = "/Details" />} label="Späť" secondary={true} style={styles.eventregcomp.cancel}/>
      <EventRegFormComp initialData={user}/>

    </div>)
  }
}
