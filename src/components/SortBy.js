import React, { Component } from 'react';

import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export class SortBy extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div className="sort-ctrl">
        <FlatButton
          onTouchTap={this.handleTouchTap.bind(this, 'name')}
          label="Сортировать по имени"
          primary={true}
        />
        <FlatButton
          onTouchTap={this.handleTouchTap.bind(this, 'surname')}
          label="Сортировать по фамилии"
          primary={true}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose.bind(this, 'name')}
        >
          <Menu>
            <MenuItem primaryText="От А до Я" onClick={() => this.sortBy(this.state.attr, 'asc')}/>
            <MenuItem primaryText="От Я до А" onClick={() => this.sortBy(this.state.attr, 'desc')}/>
          </Menu>
        </Popover>
      </div>
    )

  }

  handleRequestClose(name) {
    this.setState({
      open: false
    });
  }

  handleTouchTap(attr, event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
      attr: attr
    });
  };

  sortBy(field, order) {
    let users = this.props.data;
    users.sort((a, b) => {
      if (order === 'asc') {
        return a[field] >= b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
    this.props.handleUpdate(users);
  }

}