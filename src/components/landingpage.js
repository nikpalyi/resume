import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import profilepic from '../img/profilepic.png';

class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img src={profilepic} alt='avatar' className='avatar-img' />

            <div className='banner-text'>
              <h1>Junior React Developer</h1>

              <hr />

              <p>React | HTML/CSS | JavaScript</p>

              <div className='social-links'>
                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/npalyi'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-linkedin-square' aria-hidden='true' />
                </a>

                {/* Github */}
                <a
                  href='http://github.com/nikpalyi'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square' aria-hidden='true' />
                </a>

                {/* Freecodecamp */}
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-free-code-camp' aria-hidden='true' />
                </a>

                {/* Youtube */}
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-youtube-square' aria-hidden='true' />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
