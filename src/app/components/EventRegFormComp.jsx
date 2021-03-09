import React from 'react';
import {Form, Field} from 'react-final-form';
import {compose, lifecycle} from 'recompose';
import {sessionService} from 'redux-react-session';
import {Link} from 'react-router-dom';
import {List, ListItem, Paper} from 'material-ui';

import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import TextField from './ff-mui/TextField';
import PasswordField from './ff-mui/PasswordField';
import styles from '../css';

const doSignUpOnEvent = values => axios.post('/signuponevent', values).then((response) => {
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
  doSignUpOnEvent(values);
}

const EventRegFormComp = ({initialData}) => {
  let authenticated = window.sessionStorage.getItem("authenticated");
  if (authenticated === "true")
    return (<Form onSubmit={onSubmit} initialValues={initialData} validate={values => {
        const errors = {};

      }} render={({handleSubmit}) => (<form onSubmit={handleSubmit}>
        <div>
          <div style={styles.eventregcomp.evRegTab}>
            <div style={styles.eventregcomp.topText}>Prihláška</div>
            <ListItem primaryText="Údaje o jazdcovi"/>
            <Field id="firstname" name="firstname" component={TextField} placeholder="Meno"/>
            <Field id="lastname" name="lastname" component={TextField} placeholder="Priezvisko"/>
            <Field id="dob" name="dob" component={TextField} placeholder="Dátum narodenia"/>
            <Field id="street" name="street" component={TextField} placeholder="Ulica"/>
            <Field id="city" name="city" component={TextField} placeholder="Mesto"/>
            <Field id="zip" name="zip" component={TextField} placeholder="PSČ"/>
            <Field id="state" name="state" component={TextField} placeholder="Štát"/>
            <Field id="phone" name="phone" component={TextField} placeholder="Telefón"/>
            <Field id="email" name="email" component={TextField} placeholder="E-mail"/>
            <Field id="team" name="team" component={TextField} placeholder="Tím"/>
            <Field id="drivinglicence" name="drivinglicence" component={TextField} placeholder="Číslo vodičského preukazu"/>
          </div>
          <div style={styles.eventregcomp.evRegCoDriverTab}>
            <ListItem primaryText="Údaje o spolujazdcovi"/>
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
            <br/>
            <br/>
          </div>
          <div style={styles.eventregcomp.evRegTabCar}>
            <ListItem primaryText="Údaje o vozidle"/>
            <Field id="manufacturer" name="manufacturer" component={TextField} placeholder="Výrobca"/>
            <Field id="carmodel" name="carmodel" component={TextField} placeholder="Model"/><br/>
            <Field id="enginevalue" name="enginevalue" component={TextField} placeholder="Objem motora"/>
            <Field id="power" name="power" component={TextField} placeholder="Výkon"/><br/>
            <Field id="turbo" name="turbo" component={TextField} placeholder="Turbo"/>
            <Field id="gear" name="gear" component={TextField} placeholder="Pohon"/><br/>
            <Field id="evidence_number" name="evidence_number" component={TextField} placeholder="ŠPZ"/>
            <br/>

          <button type="submit">
              Potrvdiť
            </button>
          </div>

        </div>
      </form>)}/>)
}

export default EventRegFormComp;
