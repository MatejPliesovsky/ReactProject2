import React from 'react';
import {Link} from 'react-router-dom';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  pos:{
    marginTop:-889,
    marginLeft:54,
    width:1770,
  },
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
  conPos:{
    marginLeft:10,
  },
  car: {
    height: 220,
    width: 480,
    marginTop:4,
    marginLeft:10,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#43A047'
  },
  submit: {
    width: 100,
    height: 45,
    marginTop: 1 + '%',
    marginRight: 40 + '%',
    marginBottom: 0 + '%'
  },
  cancel: {
    width: 100,
    height: 45,
    marginTop: -9 + '%',
    marginLeft: 40 + '%',
    marginBottom: 0 + '%'
  },
  circular:{
    marginTop:-240,
    marginLeft:500,
    width:240,
    height:240,
    borderRadius:100+'%'
  },
  events:{
    height:500,
    width:480,
    marginTop:5,
    marginLeft:10,
    textAlign:'center',
    display:'inline-block',
    backgroundColor:'#43A047',
  },
};

export default class MyTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div style={styles.pos}>
        <Tabs onChange={this.handleChange} value={this.state.slideIndex}>
          <Tab label="Profile" value={0} />
          <Tab label="Team" value={1} />
          <Tab label="Cars" value={2} />
          <Tab label="Events" value={3} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange}>

          <div style={styles.conPos}>
            <h2 style={styles.headline}>Profile tab</h2>
            You can edit your profile here.<br />
            <TextField id="text-field-default" defaultValue="First name" /><br />
            <TextField id="text-field-default" defaultValue="Last name" /><br />
            <TextField id="text-field-default" defaultValue="Date of birth" /><br />
            <TextField id="text-field-default" defaultValue="Adress" /><br />
            <TextField id="text-field-default" defaultValue="Driving licence" /><br />
            <img style={styles.circular} src="http://profile.actionsprout.com/default.jpeg"/>
          </div>

          <div style={styles.slide}>
            <h2 style={styles.headline}>Co-Driver's profile tab</h2>
            You can edit co-driver's profile here.<br />
            <TextField id="text-field-default" defaultValue="First name" /><br />
            <TextField id="text-field-default" defaultValue="Last name" /><br />
            <TextField id="text-field-default" defaultValue="Date of birth" /><br />
            <TextField id="text-field-default" defaultValue="Adress" /><br />
            <TextField id="text-field-default" defaultValue="Driving licence" /><br />
            <img style={styles.circular} src="http://profile.actionsprout.com/default.jpeg"/>
          </div>

          <div style={styles.slide}>
            <div>
              <List>
              <Paper style={styles.car} zDepth={2}><ListItem primaryText="Car"/>
                <TextField hintText="Hint Text"/><br/>
                <TextField hintText="Hint Text"/>
                <RaisedButton containerElement={<Link to="/UserDash"/>} label="Submit" primary={true} style={styles.submit} />
              <RaisedButton containerElement={<Link to="/AdminDash"/>} label="Cancel" primary={true} style={styles.cancel} />
            </Paper>
          </List>
        </div>
          </div>
          <div style={styles.slide}>
            <List>
              <Paper style={styles.events} zDepth={2}><ListItem primaryText="Kalendar pretekov"/></Paper>
          </List>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
