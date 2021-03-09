import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DefaultLayout from '../layouts/Default.jsx';

class Main extends React.Component {
  render() {
    return (<MuiThemeProvider muiTheme={muiTheme}>
      <DefaultLayout>
        <div>{this.props.children}</div>
      </DefaultLayout>
    </MuiThemeProvider>);
  }
}
export default Main;
