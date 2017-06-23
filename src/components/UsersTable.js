import React, { Component } from 'react';

import { UserRow } from './UserRow';
import { SortBy } from './SortBy';

import {
  Table,
  TableHeader,
  TableHeaderColumn,
  TableBody,
  TableRow,
} from 'material-ui/Table';
import { Card, CardHeader, CardMedia } from 'material-ui/Card';
export class UsersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: props.data
    }
  }

  render() {
    let users = this.props.data;
    let template = users.map((item, index) => {
      return (
        <UserRow item={item} key={index} i={index} />
      );
    });

    return (
      <Card>
        <CardHeader>
          <SortBy data={users} handleUpdate={this.updateUsers.bind(this)} />
        </CardHeader>
        <CardMedia>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>№</TableHeaderColumn>
                <TableHeaderColumn>Имя</TableHeaderColumn>
                <TableHeaderColumn>Фамилия</TableHeaderColumn>
                <TableHeaderColumn>Группа</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {template}
            </TableBody>
          </Table>
        </CardMedia>
      </Card>
    )
  }

  updateUsers(users) {
    this.setState({ users: users });
  }
}