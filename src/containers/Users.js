import React, { Component } from 'react';

import { UsersTable } from '../components/UsersTable';
import { UserGroup } from '../components/UserGroup';
import { ModalForm } from '../components/ModalForm';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Tabs, Tab } from 'material-ui/Tabs';

import axios from 'axios';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


export default class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('/data.json')
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  addUser(user) {
    let users = this.state.users;
    users.push(user);
    this.setState({users: users});
  }

  render() {
    
    return (
      <MuiThemeProvider>
        <div className="container">
          <ModalForm onUpdate={(user) => {this.addUser(user)} }/>
          <h2> Список пользователей </h2>
          <Tabs>
            <Tab label="Все">
              <UsersTable data={this.state.users} />
            </Tab>
            <Tab label="По группам">
              <UserGroup data={this.state.users} />
            </Tab>
          </Tabs>
        </div>
      </MuiThemeProvider>
    )
  }
}