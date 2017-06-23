import React, { Component } from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export class ModalForm extends Component {

  constructor() {
    super();
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Создать пользователя" onTouchTap={this.handleOpen} />
          <Dialog
            title="Создать пользователя"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            Создайте пользователя
            
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}