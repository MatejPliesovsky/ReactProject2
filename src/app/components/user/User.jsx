import React from 'react';
import {Form, Field} from 'react-final-form';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import {List, ListItem, Paper} from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import TextField from '../ff-mui/TextField';
import PasswordField from '../ff-mui/PasswordField';
import styles from '../../css';

const doUpdate = values => axios.post('/update', values).then((response) => {
  if (response.data && response.data.login) {
    const login = response.data.login;
    window.sessionStorage.setItem("authenticated", true);
    window.document.location = "/UserDash";
  } else {
    alert(response.data.error);
  }

}).catch((error) => {
  console.log('error');
  console.log(error);
});;

const onSubmit = async values => {
  await doUpdate(values);
}

const User = ({initialData}) => {
  let authenticated = window.sessionStorage.getItem("authenticated");
  if (authenticated === "true")
    return (<Form onSubmit={onSubmit} initialValues={initialData} validate={values => {
        const errors = {};

      }} render={({handleSubmit, pristine, invalid}) => (<form onSubmit={handleSubmit}>
        <div style={styles.user.posFields}>
          <h2 >Profil jazdca</h2>
          <Paper style={styles.user.profTab} zDepth={0}>
            <Field id="login" name="login" component={TextField} placeholder="Prihlasovacie meno"/>
            <Field id="firstname" name="firstname" component={TextField} placeholder="Meno"/><br/>
            <Field id="lastname" name="lastname" component={TextField} placeholder="Priezvisko"/>
            <Field id="dob" name="dob" component={TextField} placeholder="Dátum narodenia"/><br/>
            <Field id="street" name="street" component={TextField} placeholder="Ulica"/>
            <Field id="city" name="city" component={TextField} placeholder="Mesto"/><br/>
            <Field id="zip" name="zip" component={TextField} placeholder="PSČ"/>
            <Field id="state" name="state" component={TextField} placeholder="Štát"/><br/>
            <Field id="phone" name="phone" component={TextField} placeholder="Telefón"/>
            <Field id="email" name="email" component={TextField} placeholder="E-mail"/><br/>
            <Field id="team" name="team" component={TextField} placeholder="Tím"/>
            <Field id="drivinglicence" name="drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/><br/>
            <Field id="password" name="password" component={PasswordField} placeholder="Heslo"/>
            <Field id="password1" name="password1" component={PasswordField} placeholder="Potrvrdenie hesla"/>
            <img style={styles.user.circular} src="http://profile.actionsprout.com/default.jpeg"/>
            <RaisedButton label="Nahrať fotku" labelPosition="before" style={styles.user.upload} containerElement="label"><input type="file" style={styles.user.imgInput}/></RaisedButton>

            <div style={styles.user.submit}>
              <button type="submit" disabled={pristine || invalid}>
                Potrvdiť
              </button>
            </div>

          </Paper>
        </div>
      </form>)}/>)
}

export default User;
