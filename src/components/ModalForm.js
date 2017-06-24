import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';

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

  submit() {
    let user = {
      name: ReactDOM.findDOMNode(this.refs.name).value,
      surname: ReactDOM.findDOMNode(this.refs.surname).value
    }
    let group = ReactDOM.findDOMNode(this.refs.group).value;
    if (group) {
      user['group'] = group;
    }
    this.props.onUpdate(user);
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton label="Закрыть" primary={true} onTouchTap={this.handleClose} />
    ];
    return (
      <MuiThemeProvider>
        <div>
          <RaisedButton label="Создать пользователя" onTouchTap={this.handleOpen} />
          <Dialog
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            <Form onSubmit={this.submit.bind(this)} className='form-user'>
              <div className="form-group">
                <input type='text' placeholder='Имя' ref='name' required/>
              </div>
              <div className="form-group">
                <input type='text' placeholder='Фамилия' ref='surname' required/>
              </div>
              <div className="form-group">
                <input type='text' placeholder='Группа' ref='group' />
              </div>
              <RaisedButton type='submit' label="Создать"/>
            </Form>
          </Dialog>
        </div>
      </MuiThemeProvider>
    )
  }
}