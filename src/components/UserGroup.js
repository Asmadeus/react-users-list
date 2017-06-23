import React, { Component } from 'react';

import { UsersTable } from './UsersTable';

export class UserGroup extends Component {

  render() {
    let template = [];
    let groupArr = this.groupBy(this.props.data, 'group');
    let i = 0;
    for (let group in groupArr) {
      template.push(
        <div key={i}>
          <h2>{group !== 'undefined' ? group : 'Без группы'}</h2>
          <UsersTable data={groupArr[group]} />
        </div>
      )
      i++;
    }
    return (
      <div>
        {template}
      </div>
    )
  }

  groupBy(arr, key) {
    return arr.reduce((previousObj, item) => {
      (previousObj[item[key]] = previousObj[item[key]] || []).push(item);
      return previousObj;
    }, {});
  };
}