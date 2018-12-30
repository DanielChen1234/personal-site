import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-body'>
          <Grid className='contact-grid'>
              <Cell col={6}>
                <p>
                  Hello! I am a former law school 1L turned coder. As such, I bring an attention to detail and passionate work ethic.
                  I am a determined and good-natured individual, who inspires confidence in clients and colleagues alike.
                </p>
                 <p>
                 My stack primarily consists of React, React-Redux, Express.js, and Sequelize. 
                 My projects are stored on GitHub and developed utilizing the AGILE methodology. 
                 I love to learn and am open to learning new technologies!
                </p>
                <p>
                  I am currently looking for new opportunities in front-end or full stack web development. Let's connect!
                </p>
                <br />
                <a href='https://www.dropbox.com/s/z1ft51aer7f0u4b/Daniel_Chen.pdf?dl=0'>resume</a>
                <br />
              </Cell>
          </Grid>
      </div>
    )
  }
}
