import React from 'react';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import DateRange from 'material-ui/svg-icons/action/date-range';
import Settings from 'material-ui/svg-icons/action/settings';
import Cancel from 'material-ui/svg-icons/navigation/cancel';
import FontIcon from 'material-ui/FontIcon';
import png2 from './images/flags.png'

import styles from '../css';

export default class HomeScreenComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<center>
      <div style={styles.homescreen.position}>
        <div style={styles.homescreen.content}>
          <div>
            <img style={styles.homescreen.disImig} src={png2}/>
            <div style={styles.homescreen.line1}></div>
            <RaisedButton containerElement={<Link to = "/Events" />} label="Kalendár" primary={true} style={styles.homescreen.daterange} icon={<DateRange />}/>
            <RaisedButton containerElement={<Link to = "/UserDash" />} label="Nastavenia" primary={true} style={styles.homescreen.settings} icon={<Settings />}/>
            <RaisedButton containerElement={<Link to = "/" />} label="Odhlásenie" secondary={true} style={styles.homescreen.cancel} icon={<Cancel />}/>
            <div style={styles.homescreen.line2}></div>
          </div>
          <div style={styles.homescreen.headline}>Portál slúži na evidenciu súťažiacich na automobilových podujatiach na Slovensku.<br/>
            <br/>Disciplíny rally, šprint, drift, auto-cross, rally-cross a iné.</div>
        </div>
      </div>
    </center>);
  }
}
