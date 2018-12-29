import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src='https://media.licdn.com/dms/image/C4D03AQE7rh66qhTBaA/profile-displayphoto-shrink_200_200/0?e=1551312000&v=beta&t=ZMAtZiU50OkmWA02D-JApPGquIWQLWl4oabFx8JmdkE'
            alt='avatar'
            className='avatar-img' />

            <div className='banner-text'>
                <h1>Front-End Web Developer</h1>

                <hr />

                <p>Javascript | React | React-Redux | Express | Sequelize</p>

                <div className="social-links">
                  <a href='https://www.linkedin.com/in/danielchen1234/' target='_blank' rel='noopener no referrer'>
                    <i className='fa fa-linkedin-square' aria-hidden='true' />
                  </a>
                  <a href='https://github.com/DanielChen1234' target='_blank' rel='noopener no referrer'>
                    <i className='fa fa-github-square' aria-hidden='true' />
                  </a>
                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
