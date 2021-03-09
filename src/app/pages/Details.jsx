import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default from '../layouts/Default2.jsx';
import DeComp from '../components/DeComp.jsx';

export default class Details extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default/>
        <DeComp/>
      </div>
    </MuiThemeProvider>);
  }
}
