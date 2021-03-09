import React, {Component} from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  content: {
    marginLeft: 200
  },

  headline: {
    fontSize: 68,
    padding: 15,
    marginBottom: 2 + '%',
    fontWeight: 200
  },

  line1: {
    width: 600,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border: '1px solid black'
  },

  line2: {
    width: 500,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border: '1px solid black'
  },

  btnGetStarted: {
    width: 200,
    height: 65
  }
};

export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: ''
      }
    }
    this.fetchUsers = this.fetchUsers.bind(this);
  }

  fetchUsers() {
    axios.get('/users').then((response) => {
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (<center>
      <div style={styles.content}>
        <div style={styles.headline}>WELCOME {this.state.user.name}
          TO</div>
        <div>
          <div style={styles.line1}></div>
          <div style={styles.line2}></div>
        </div>
        <div>
          <RaisedButton label="Login" primary={true} style={styles}/>
        </div>
      </div>
    </center>);
  }
}
