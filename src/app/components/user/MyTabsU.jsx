import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import SwipeableViews from 'react-swipeable-views';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import User from './User.jsx';
import CoDriver from './CoDriver.jsx';
import Car from './Car.jsx';

const styles = {
  pos: {
    width: 100 + '%'
  },
  slide: {
    padding: 10
  },
  save: {
    margin: 10
  },
  cancel: {
    margin: 20
  }
};

export default class MyTabsU extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      open: false,
      user: null
    };
  }

  handleChange = (value) => {
    this.setState({slideIndex: value});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
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

    return (<div style={styles.pos}>
      <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
        <Tab label="Môj profil" value={0}/>
        <Tab label="Tím" value={1}/>
        <Tab label="Vozidlo" value={2}/>
      </Tabs>
      <RaisedButton label="Späť" secondary={true} style={styles.cancel} containerElement={<Link to = "/UserHomeScreen" />}/>

      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

        <User initialData={user}/>
        <div style={styles.slide}>
          <CoDriver initialData={user}/>
        </div>

        <div style={styles.slide}>
          <Car initialData={user}/>
        </div>

      </SwipeableViews>
    </div>);
  }
}
