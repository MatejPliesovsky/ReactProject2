import React from 'react';
import {Form, Field} from 'react-final-form';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import {List, ListItem, Paper} from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import TextField from '../ff-mui/TextField';
import HiddenField from '../ff-mui/HiddenField';
import styles from '../../css';

const doInsert = values => axios.post('/insert', values).then((response) => {
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
  await doInsert(values);
}

const CoDriver = ({initialData}) => {
  let authenticated = window.sessionStorage.getItem("authenticated");

  if (authenticated === "true")
    return (<Form onSubmit={onSubmit} initialValues={initialData} validate={values => {
        const errors = {};

      }} render={({handleSubmit, pristine, invalid}) => (<form onSubmit={handleSubmit}>
        <div style={styles.codriver.posFields}>
          <h2 >Profil spolujazdca</h2>
          <Paper style={styles.user.profTab} zDepth={0}>
            <Field id="co_firstname" name="co_firstname" component={TextField} placeholder="Meno"/>
            <Field id="co_lastname" name="co_lastname" component={TextField} placeholder="Priezvisko"/><br/>
            <Field id="co_dob" name="co_dob" component={TextField} placeholder="Dátum narodenia"/>
            <Field id="co_street" name="co_street" component={TextField} placeholder="Ulica"/><br/>
            <Field id="co_city" name="co_city" component={TextField} placeholder="Mesto"/>
            <Field id="co_zip" name="co_zip" component={TextField} placeholder="PSČ"/><br/>
            <Field id="co_state" name="co_state" component={TextField} placeholder="Štát"/>
            <Field id="co_phone" name="co_phone" component={TextField} placeholder="Telefón"/><br/>
            <Field id="co_email" name="co_email" component={TextField} placeholder="E-mail"/>
            <Field id="co_team" name="co_team" component={TextField} placeholder="Tím"/><br/>
            <Field id="co_drivinglicence" name="co_drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/>
            <Field name="_id" component={HiddenField}/><br/>
            <br/>
            <img style={styles.codriver.circular} src="http://profile.actionsprout.com/default.jpeg"/>
            <RaisedButton label="Nahrať fotku" labelPosition="before" style={styles.codriver.upload} containerElement="label"><input type="file" style={styles.codriver.imgInput}/></RaisedButton>

            <div style={styles.codriver.submit}>
              <button type="submit" disabled={pristine || invalid}>
                Potrvdiť
              </button>
            </div>

          </Paper>
        </div>
      </form>)}/>)
}

export default CoDriver;
