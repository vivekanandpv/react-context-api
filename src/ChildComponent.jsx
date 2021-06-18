import React, { Component } from 'react';
import { AppTheme } from './App';

class ChildComponent extends Component {
  render() {
    return (
      <>
        <AppTheme.Consumer>
          {(theme) => {
            return (
              <>
                {theme ? (
                  <div className='alert alert-light'>
                    This is child component in light theme
                  </div>
                ) : (
                  <div className='alert alert-dark'>
                    This is child component in dark theme
                  </div>
                )}
              </>
            );
          }}
        </AppTheme.Consumer>
      </>
    );
  }
}

export default ChildComponent;
