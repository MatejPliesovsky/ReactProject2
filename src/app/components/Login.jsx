import React from 'react';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoginForm from './LoginForm.jsx';
import png from './images/race.png'

import styles from '../css';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div>
        <List>
          <Paper style={styles.login.bgPaper} zDepth={2}>
            <ListItem primaryText="Prihlásenie"/>
            <LoginForm/>
            <img style={styles.login.disImig} src={png}/>
          </Paper>
        </List>
      </div>
    </div>);
  }
}
