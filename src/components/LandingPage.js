import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl'
import headShot from '../headShot.jpeg'

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Grid className="landing-grid">
          <Cell col={12} className="head-shot">
            <img src={headShot}
            alt='avatar'
            className='avatar-img' />

            <div className='banner-text'>
                <h1>Front-End Developer</h1>

                <hr />

                <p>Javascript | React | React-Redux | Express | Sequelize</p>
                
                <a href='mailto:daniel.w.chen10@gmail.com'>daniel.w.chen10@gmail.com</a>

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
