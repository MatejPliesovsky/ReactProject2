import React from 'react';
import {List, ListItem, Paper} from 'material-ui';
import {Form, Field} from 'react-final-form';
import axios from 'axios';
import {compose, withState} from 'recompose';

import TextField from './ff-mui/TextField';
import PasswordField from './ff-mui/PasswordField';
import Recaptcha from 'react-recaptcha';
import LogoutButton from './LogoutButton.jsx';
import styles from '../css';

var callback = function() {
  console.log('Done!!!!');
};

const doSignUp = values => axios.post('/register', values).then((response) => {
  if (response.data.registered) {
    window.sessionStorage.setItem("authenticated", true);
    window.document.location = "/UserHomeScreen";
  } else {
    alert(response.data.error);
  }
}).catch((error) => {
  console.log(error);
});;

const onSubmit = async values => {
  console.log('submitting');
  console.log(values);
  await doSignUp(values);
}
const SignUpForm = ({verified, setVerified}) => {
  let authenticated = window.sessionStorage.getItem("authenticated");
  if (authenticated === "true")
    return (<div>
      <div>Ste prihlásený</div>
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
          <List>
            <Paper style={styles.signup.regTab} zDepth={2}><ListItem primaryText="Registracia"/>
              <Field name="login" component={TextField} placeholder="Prihlasovacie meno"/>
              <Field name="firstname" component={TextField} placeholder="Meno"/><br/>
              <Field name="lastname" component={TextField} placeholder="Priezvisko"/>
              <Field name="dob" component={TextField} placeholder="Dátum narodenia"/><br/>
              <Field name="street" component={TextField} placeholder="Ulica"/>
              <Field name="city" component={TextField} placeholder="Mesto"/><br/>
              <Field name="zip" component={TextField} placeholder="PSČ"/>
              <Field name="state" component={TextField} placeholder="Štát"/><br/>
              <Field name="phone" component={TextField} placeholder="Telefón"/>
              <Field name="email" component={TextField} placeholder="E-mail"/><br/>
              <Field name="team" component={TextField} placeholder="Tím"/>
              <Field name="drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/><br/>
              <Field name="password" component={PasswordField} placeholder="Heslo"/>
              <Field name="password1" component={PasswordField} placeholder="Potrvrdenie hesla"/>
              <br/>
              <Recaptcha sitekey="6Lem9FsUAAAAADdtViUe9omIy4e_QIZrQITKqqA7" render="explicit" verifyCallback={() => setVerified(true)} onloadCallback={callback}/>
              <button type="submit" disabled={pristine || invalid || !verified}>
                Potvrdiť
              </button>
            </Paper>
          </List>
        </div>
      </form>)}/>)
}

export default compose(withState('verified', 'setVerified', false))(SignUpForm);
