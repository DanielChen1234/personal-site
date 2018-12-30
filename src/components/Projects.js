import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

export default class Projects extends Component {
  constructor(){
    super();
    this.state = {
      activeTab: 0
    }
  }

  toggleCatagories = () => {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >Project Gif</CardTitle>
            <CardText>
              A web application that allows a user to search for any gif. Highlights are the sort and filter functionality. Pure React.
            </CardText>
            <CardActions border>
              <Button colored  href='https://github.com/DanielChen1234/projectGif' target='_blank'>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >Molli</CardTitle>
            <CardText>
              A react native application developed to leverage the popularity of e-sports and provide microtransaction gambling. React Native and Firebase.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/capstone-molli/molli'>GitHub</Button>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png) center / cover'}} >Cheer.</CardTitle>
            <CardText>
              A web application that leverages machine learning from Google Vision and render real-time directions via Google Geolocator. React, Express, and Sequelize.
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/DanielChen1234/stackathon'>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    } else {
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*dlapmYAhWBkrFuHm020qlg.png) center / cover'}} >DinoShopper</CardTitle>
            <CardText>
              An e-commerce web application developed to facilitate transactions via Stripe. React, React-Redux, Express, Sequelize
            </CardText>
            <CardActions border>
              <Button colored href='https://github.com/dfblGS/Dinosaurs'>GitHub</Button>
            </CardActions>
          </Card>
        </div>
      )
    }
  } 

  render() {
    return (
      <div className='catagory-tabs'>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>React</Tab>
          <Tab>React-Redux</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
          <div className='content'>{this.toggleCatagories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
