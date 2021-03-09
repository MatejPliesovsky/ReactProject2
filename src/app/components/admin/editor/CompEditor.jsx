import React from 'react';
import {Link} from 'react-router-dom';
const styles = {
  pos: {
    position: 'fix',
    width: 100 + '%'
  }
};

export default class CompEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (<div style={styles.pos}>
      Na stránke sa pracuje...
    </div>);
  }
}
