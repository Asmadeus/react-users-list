import React, { Component } from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export class UserRow extends Component {

  render() {
    return (
      <TableRow hoverable={true}>
        <TableRowColumn>{this.props.i + 1}</TableRowColumn>
        <TableRowColumn>{this.props.item.name}</TableRowColumn>
        <TableRowColumn>{this.props.item.surname}</TableRowColumn>
        <TableRowColumn>{this.props.item.group}</TableRowColumn>
      </TableRow>
    )
  }
}