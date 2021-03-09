import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from 'material-ui/styles';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';

import styles from '../css';

const tableData = [
  {
    date: '3.1.2018',
    event: 'Zimna Levoca',
    kategory: 'MRC'
  }, {
    date: '4.2.2018',
    event: 'Dobsinska Zima',
    kategory: 'MRC'
  }, {
    date: '10.3.2018',
    event: 'West-Lake Race Cestice',
    kategory: 'MTEcup'
  }, {
    date: '8.4.2018',
    event: 'West-Lake Cup Bankov',
    kategory: 'MTEcup'
  }, {
    date: '8.6.2018',
    event: 'Dolna Strehova',
    kategory: 'MRC'
  }
];

class EventsComp extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false
  };

  fetchUsers() {
    axios.get('/users').then((response) => {
      this.setState({user: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchUsers();
  }

  render() {
    return (<div style={styles.events.slide}>
      <List>
        <Paper style={styles.events.eventTables} zDepth={0}>
          <div>
            <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
              <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
                <TableRow style={styles.events.headTop}>
                  <TableHeaderColumn tooltip="The Date">Dátum</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Event">Podujatie</TableHeaderColumn>
                  <TableHeaderColumn tooltip="The Kategory">Kategória</TableHeaderColumn>
                  <TableHeaderColumn ></TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
                {
                  tableData.map((row, index) => (<TableRow key={index}>
                    <TableRowColumn>{row.date}</TableRowColumn>
                    <TableRowColumn>{row.event}</TableRowColumn>
                    <TableRowColumn>{row.kategory}</TableRowColumn>
                    <TableRowColumn>
                      <div>
                        <RaisedButton containerElement={<Link to = "/Details" />} label="Detaily" style={styles.btnGround}/>
                      </div>
                    </TableRowColumn>
                  </TableRow>))
                }
              </TableBody>
            </Table>
          </div>
        </Paper>
      </List>
    </div>);
  }
}

export default EventsComp;
