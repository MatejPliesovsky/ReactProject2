import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';

import png from './images/mrcplagat.png'

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

class DeComp extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: false,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    tableData: null
  };
  fetchDrivers() {
    axios.get('/competitors').then((response) => {
      this.setState({tableData: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchDrivers();
  }

  render() {
    const {tableData} = this.state;
    if (!tableData)
      return (<div>Loading data, please wait...</div>);
    return (<div style={styles.decomp.slide}>
      <List>
        <Paper style={styles.decomp.info} zDepth={2}>
          <ListItem primaryText="Informácie o podujatí"/>
          <img style={styles.decomp.eventIm} src={png}/>
          <Paper style={styles.decomp.text} zDepth={0}>"Zimná automobilová súťaž, nielen pre profesionálnych jazdcov, zaradená do podujatia MRC 2018."</Paper>
          <RaisedButton containerElement={<Link to = "/EventRegistration" />} label="Prihlásiť sa" secondary={true} style={styles.decomp.btnReg}/>
          <RaisedButton containerElement={<Link to = "/Events" />} label="Späť" raised={true} style={styles.decomp.btnReg}/>
        </Paper>
      </List>
      <List>
        <Paper style={styles.decomp.registered} zDepth={2}>
          <ListItem primaryText="Zoznam súťažiacich"/>
          <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
            <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
              <TableRow>
                <TableHeaderColumn >Meno a Priezvisko</TableHeaderColumn>
                <TableHeaderColumn >Tím</TableHeaderColumn>
                <TableHeaderColumn >Skupina</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
              {
                tableData.map((row, index) => (<TableRow key={index}>
                  <TableRowColumn>{row.firstname + ' ' + row.lastname}</TableRowColumn>
                  <TableRowColumn>{row.team}</TableRowColumn>
                  <TableRowColumn>{row.group}</TableRowColumn>
                </TableRow>))
              }
            </TableBody>
          </Table>
        </Paper>
      </List>
    </div>);
  }
}

export default DeComp;
