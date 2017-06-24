import React, { Component } from 'react'

import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class Home extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">

          <Card>
            <CardHeader title="URL Avatar" subtitle="Subtitle" avatar="/city.jpg" />
            <CardMedia overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />} >
              <img src="/city.jpg" alt="" />
            </CardMedia>
            <CardTitle title="Card title" subtitle="Card subtitle" />
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          </Card>
        </div>
      </MuiThemeProvider>
    )
  }
}