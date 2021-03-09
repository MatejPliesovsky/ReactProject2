import React from 'react';
import {Form, Field} from 'react-final-form';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import axios from 'axios';

const doLogout = values => axios.post('/logout').then((response) => {
  window.sessionStorage.setItem("authenticated", false);
  window.document.location = "/";
});

const onClick = async values => {
  await doLogout(values);
}
const LogoutButton = () => (<button type="submit" onClick={onClick}>
  Odhlásiť
</button>)
export default LogoutButton;
