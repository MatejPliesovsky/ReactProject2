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

const doInsertCar = values => axios.post('/insertcar', values).then((response) => {
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
  await doInsertCar(values);
}

const Car = ({initialData}) => {
  let authenticated = window.sessionStorage.getItem("authenticated");

  if (authenticated === "true")
    return (<Form onSubmit={onSubmit} initialValues={initialData} validate={values => {
        const errors = {};

      }} render={({handleSubmit, pristine, invalid}) => (<form onSubmit={handleSubmit}>
        <div style={styles.codriver.posFields}>
          <h2 >Informácie o vozidle</h2>
          <Field id="manufacturer" name="manufacturer" component={TextField} placeholder="Výrobca"/>
          <Field id="carmodel" name="carmodel" component={TextField} placeholder="Model"/>
          <Field id="enginevalue" name="enginevalue" component={TextField} placeholder="Objem motora"/>
          <Field id="power" name="power" component={TextField} placeholder="Výkon"/>
          <Field id="turbo" name="turbo" component={TextField} placeholder="Turbo"/>
          <Field id="gear" name="gear" component={TextField} placeholder="Pohon"/>
          <Field id="evidence_number" name="evidence_number" component={TextField} placeholder="ŠPZ"/>
          <Field name="_id" component={HiddenField}/><br/>
          <br/>

          <img style={styles.car.carsIm} src="http://elektronika.com.pl/wp-content/uploads/2014/03/grupa-osobowe.png"/>
          <RaisedButton label="Nahrať fotku" labelPosition="before" style={styles.car.upload} containerElement="label"><input type="file" style={styles.car.imgInput}/></RaisedButton>

          <div>
            <button type="submit" disabled={pristine || invalid}>
              Potrvdiť
            </button>
          </div>

        </div>
      </form>)}/>)
}

export default Car;
