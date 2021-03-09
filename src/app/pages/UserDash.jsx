import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default2 from '../layouts/Default2.jsx';
import MyTabsU from '../components/user/MyTabsU.jsx';

export default class UserDash extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default2/>
        <MyTabsU/>
      </div>
    </MuiThemeProvider>);
  }
}
