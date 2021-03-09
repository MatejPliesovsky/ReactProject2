import React from 'react';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';

import styles from '../css';

export default class EventsList extends React.Component {
  constructor(props) {
    super(props);
    <ListItem secondaryText=""/>
  }
  render() {
    return (<div>
      <List>
        <Paper style={styles.homeevents.table} zDepth={2}>
          <ListItem primaryText="Kalendár pretekov"/>
          <ListItem secondaryText="3.1.2018 MRC Zimná Levoča"/>
          <ListItem secondaryText="4.2.2018 MRC Dobšinská zima"/>
          <ListItem secondaryText="10.3.2018 Maad Rally Cestice"/>
          <ListItem secondaryText="8.5.2018 Rebuy Stars Rally Bankov"/>
        </Paper>
      </List>
    </div>);
  }
}
