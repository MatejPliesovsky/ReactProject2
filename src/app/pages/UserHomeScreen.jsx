import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default2 from '../layouts/Default2.jsx';
import HomeScreenComp from '../components/HomeScreenComp.jsx';

export default class UserHomeScreen extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default2/>
      <HomeScreenComp/>
      </div>
    </MuiThemeProvider>);
  }
}
