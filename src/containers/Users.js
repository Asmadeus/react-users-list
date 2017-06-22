import React, { Component } from 'react'

const usersData = {
  users: [
    {
      name: 'Василий',
      surname: 'Петров',
      group: 'Бухгалтерия'
    },
    {
      name: 'Касилий',
      surname: 'Уетров',
      group: 'Бухгалтерия'
    },
    {
      name: 'Алексей',
      surname: 'Иваноа',
      group: 'ИТ отдел'
    },
    {
      name: 'Федор',
      surname: 'Вваноа',
      group: 'ИТ отдел'
    },
    {
      name: 'Угантик',
      surname: 'Рваноа',
      group: 'ИТ отдел'
    },
    {
      name: 'Иван',
      surname: 'Андреев'
    },
    {
      name: 'Лван',
      surname: 'Шндреев'
    }
  ]
}

class SortBy extends Component {

  constructor() {
    super();
    this.state = {
      sortedBy: {
        name: false,
        surname: false
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.sortBy('name')}>
          Сортировать по имени
        </button>
        <button onClick={() => this.sortBy('surname')}>
          Сортировать по фамилии
        </button>
      </div>
    )
  }

  sortBy(field) {
    let users = this.props.data;
    if (this.state.sortedBy[field]) {
      users.reverse();
    } else {
      users.sort((a, b) => {
        return a[field] >= b[field] ? 1 : -1;
      });
      let sortedBy = this.state.sortedBy;
      sortedBy[field] = !sortedBy[field];
      this.setState({sortedBy: sortedBy});
    }
    this.props.handleUpdate(users);
  }

}

class UsersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: props.data
    }
  }

  render() {
    let users = this.state.users;
    let template = users.map((item, index) => {
      return (
        <div key={index}>
          <UserRow item={item}/>
        </div>
      );
    });

    return (
      <div>
        <SortBy data={users} handleUpdate={this.updateUsers.bind(this)}/>
        {template}
      </div>
    )
  }

  updateUsers(users) {
    this.setState({users: users});
  }
}

class UserRow extends Component {

  render() {
    return (
      <div>
        <div> {this.props.item.name} {this.props.item.surname} </div>        
      </div>
    )
  }
}

class UserGroup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: props.data,
      groupArr: this.groupBy(props.data, 'group')
    }
  }

  render() {
    let template = [];
    let groupArr = this.state.groupArr;
    let i = 0;
    for (let group in groupArr) {
      template.push(
        <div key={i}>
          <h2>{group !== 'undefined' ? group : 'Без группы'}</h2>
          <UsersTable data={groupArr[group]}/>
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


export default class Users extends Component {

  constructor() {
    super();
    this.state = {
      users: usersData.users,
      mode: 'all'
    }
  }

  render() {
    let tableTemplate;
    if (this.state.mode === 'all') {
      tableTemplate = <UsersTable data={this.state.users}/>;
    } else if (this.state.mode === 'group') {
      tableTemplate = <UserGroup data={this.state.users}/>;
    }
    return (
      <div>
        <div> Список пользователей </div>
        <br /> <br />
        <div>
          <button onClick={() => this.toggleShowMode('all')}> Все пользователи </button>
          <button onClick={() => this.toggleShowMode('group')}> Сгруппировать по группам </button>
          {tableTemplate}
        </div>
      </div>
    )
  }

  toggleShowMode(mode) {
    this.setState({mode: mode});
  }
}