import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default2.jsx';
import MyTabsA from '../components/admin/MyTabsA.jsx';

export default class AdminDash extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
        <MyTabsA/>
      </div>
    </MuiThemeProvider>);
  }
}
