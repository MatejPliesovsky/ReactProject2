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

class AdCars extends Component {
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
            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Brand">Výrobca</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Model">Model</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Fuel">Palivo</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Power">Výkon</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Volume">Objem</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Turbo">Turbo</TableHeaderColumn>
            <TableHeaderColumn tooltip="The Gear">Pohon</TableHeaderColumn>
            <TableHeaderColumn ></TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={this.state.showCheckboxes} deselectOnClickaway={this.state.deselectOnClickaway} showRowHover={this.state.showRowHover} stripedRows={this.state.stripedRows}>
          {
            tableData.map((row, index) => (<TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
            <TableRowColumn>{row.manufacturer}</TableRowColumn>
          <TableRowColumn>{row.carmodel}</TableRowColumn>
        <TableRowColumn>{row.enginevalue}</TableRowColumn>
              <TableRowColumn>{row.power}</TableRowColumn>
            <TableRowColumn>{row.turbo}</TableRowColumn>
          <TableRowColumn>{row.gear}</TableRowColumn>
        <TableRowColumn>{row.evidence_number}</TableRowColumn>
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

export default AdCars;
