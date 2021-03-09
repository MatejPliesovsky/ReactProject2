import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Default2 from '../layouts/Default2.jsx';
import EventsComp from '../components/EventsComp.jsx';

export default class Events extends React.Component {
  render() {
    return (<MuiThemeProvider>
      <div>
        <Default2/>
          <EventsComp/>
      </div>
    </MuiThemeProvider>);
  }
}
