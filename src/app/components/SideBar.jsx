
import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

  const styles={
    pos:{
      height:93+'%',
      width:54,
      backgroundColor:'#00BCD4',
    },
  };

export default class SideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }


  render() {
    return (
      <div style={styles.pos}>
  </div>
    );
  }
}
