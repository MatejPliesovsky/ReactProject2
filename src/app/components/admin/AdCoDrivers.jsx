import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
import Delete from 'material-ui/svg-icons/action/delete';
import axios from 'axios';

const styles = {
  smallIcon: {
    width: 26,
    height: 26
  }
};

class AdCoDrivers extends Component {
  state = {
    fixedHeader: true,
    stripedRows: true,
    selectable: true,
    multiSelectable: true,
    enableSelectAll: true,
    deselectOnClickaway: true,
    showCheckboxes: true,
    tableData: null
  };
  constructor(props) {
    super(props);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
  }
  fetchDrivers() {
    axios.get('/drivers').then((response) => {
      this.setState({tableData: response.data});
    }).catch((error) => {
      console.log(error);
    });
  }

  componentWillMount() {
    this.fetchDrivers();
  }

  handleTodoDelete(id) {
    {
      axios.delete('/deletion').then((response) => {
        if (response.data.authenticated) {
          window.sessionStorage.setItem("authenticated", response.data.authenticated);
        }
      }).catch((error) => {});;
    }
  }

  render() {
    const {tableData} = this.state;
    if (!tableData)
      return (<div>Loading data, please wait...</div>);
    return (<div>
      <Table fixedHeader={this.state.fixedHeader} fixedFooter={this.state.fixedFooter} selectable={this.state.selectable} multiSelectable={this.state.multiSelectable}>
        <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes} enableSelectAll={this.state.enableSelectAll}>
          <TableRow>
            <TableHeaderColumn >ID</TableHeaderColumn>
            <TableHeaderColumn >Meno a Priezvisko</TableHeaderColumn>
            <TableHeaderColumn >Tím</TableHeaderColumn>
            <TableHeaderColumn >Dátum nar.</TableHeaderColumn>
            <TableHeaderColumn >E-mail</TableHeaderColumn>
            <TableHeaderColumn >Bydlisko</TableHeaderColumn>
            <TableHeaderColumn >Telefón</TableHeaderColumn>
            <TableHeaderColumn >Vodičský preukaz</TableHeaderColumn>
          <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            tableData.map((row, index) => (<TableRow key={index}>              
                <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.co_firstname + ' ' + row.co_lastname}</TableRowColumn>
            <TableRowColumn>{row.co_team}</TableRowColumn>
          <TableRowColumn>{row.co_dob}</TableRowColumn>
        <TableRowColumn>{row.co_email}</TableRowColumn>
      <TableRowColumn>{row.co_street + ' ' + row.co_state + ' ' + row.co_zip}</TableRowColumn>
    <TableRowColumn>{row.co_phone}</TableRowColumn>
  <TableRowColumn>{row.co_drivinglicence}</TableRowColumn>
              <TableRowColumn>
                <div>
                  <IconButton onClick={this.handleTodoDelete} iconStyle={styles.smallIcon} containerElement={<Link to = "/AdminDash" />}>
                    <Delete/>
                  </IconButton>
                </div>
              </TableRowColumn>
            </TableRow>))
          }
        </TableBody>
      </Table>
    </div>);
  }
}

export default AdCoDrivers;
