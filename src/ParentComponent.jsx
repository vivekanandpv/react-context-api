import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  render() {
    return (
      <>
        <ChildComponent />
      </>
    );
  }
}

export default ParentComponent;
