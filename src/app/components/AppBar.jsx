import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  pos: {
    width: 100 + '%'
  }
}

export default class AppbarWithNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let authenticated = window.sessionStorage.getItem("authenticated") === "true"
      ? true
      : false;
    return (<div>
      <AppBar title="Evidenčný portál" style={styles.pos} iconElementRight={<FlatButton containerElement = {
          <Link to={authenticated
                ? "/UserDash"
                : "/SignUp"}/>
        }
        label = {
          authenticated
            ? "Nastavenia"
            : "Registrácia"
        } />}/>
    </div>);
  }
}
