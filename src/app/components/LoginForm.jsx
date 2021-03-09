import React from 'react';
import {Form, Field} from 'react-final-form';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import axios from 'axios';

import TextField from './ff-mui/TextField';
import PasswordField from './ff-mui/PasswordField';
import LogoutButton from './LogoutButton.jsx';

const doLogin = values => axios.post('/login', values).then((response) => {
  if (response.data && response.data.role) {
    const role = response.data.role;
    const location = role === 'user'
      ? '/UserHomeScreen'
      : '/AdminDash';
    window.sessionStorage.setItem("role", role);
    window.document.location = location;
    window.sessionStorage.setItem("authenticated", true);
  } else {
    alert(response.data.error);
  }

}).catch((error) => {
  console.log('error');
  console.log(error);
});;

const onSubmit = async values => {
  await doLogin(values);
}
const LoginForm = () => {
  let authenticated = window.sessionStorage.getItem("authenticated");
  if (authenticated === "true")
    return (<div>
      <div>Ste prihlasený</div>
      <LogoutButton/>
    </div>);
  else
    return (<Form onSubmit={onSubmit} validate={values => {
        const errors = {};
        if (!values.login) {
          errors.username = "Required";
        }
        if (!values.password) {
          errors.password = "Required";
        }
        return errors;
      }} render={({handleSubmit, pristine, invalid}) => (<form onSubmit={handleSubmit}>
        <div>
          <Field name="login" component={TextField} placeholder="Prihlasovacie meno"/>
          <Field name="password" component={PasswordField} placeholder="Heslo"/>
        </div>
        <button type="submit" disabled={pristine || invalid}>
          Potrvdiť
        </button>
      </form>)}/>)
}

export default compose(lifecycle({
  componentWillMount() {
    axios.get('/userProfile/isAuthenticated').then((response) => {
      if (response.data.authenticated) {
        window.sessionStorage.setItem("authenticated", response.data.authenticated);
      }
    }).catch((error) => {
    });;
  }
}))(LoginForm);
