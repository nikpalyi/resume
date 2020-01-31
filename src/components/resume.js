import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profilepic from '../img/profilepic.png';

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={profilepic}
                alt='avatar'
                style={{ height: '200px' }}
                className='avatar-img'
              />
            </div>

            <h2 style={{ paddingTop: '2em' }}>Nikolett Palyi</h2>
            <h4 style={{ color: 'grey' }}>Junior React developer</h4>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <p>
              Junior Fronted developer able to build a Web presence from the
              ground up -- from concept, navigation, layout and programming to
              UX.
            </p>
            <p>
              {' '}
              Skilled at writing well-designed, testable and efficient code
              using current best practices in Web development.{' '}
            </p>
            <p>
              {' '}
              Fast learner, hard worker and team player who is proficient in an
              array of scripting languages and multimedia Web tools.{' '}
            </p>

            <p> Specializes in ReactJS and responsive design.</p>

            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
            <h5>Address</h5>
            <p>Merchants Quay Dublin 8</p>
            <h5>Phone</h5>
            <p>0873508953</p>
            <h5>Email</h5>
            <p>nikpalyi@gmai.com</p>
            <h5>Github</h5>
            <p>
              <a href='https://www.w3schools.com/' target='_blank'>
                Repositories
              </a>
            </p>
            <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
          </Cell>
          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>

            <Education
              startYear={2016}
              endYear={2017}
              schoolName='National College of Ireland'
              schoolDescription='Higher Diploma in Science of Computing at Software Development, Java, SQL, Ruby on Rails, REST API'
            />

            <Education
              startYear={2006}
              endYear={2011}
              schoolName='Hungarian Universiti of Fine Arts, Budapest'
              schoolDescription="Master's Degree in Media Art, HTML, JavaScript, Adobe Photoshop, Adove Effects"
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              enYear='Present'
              jobName='Project Engineer at Wipro Lltd.'
              jobDescription='Internal Projects: Digi Dash - internal project at Wipro Ltd. for data visualization at quarterly revenue projections for project and delivery managers, helped in the creation of an internal QRP and QHP estimation POC using Agile Methodologies. Implemented an Excel looking spreadsheet for data visualization, filtering and sorting. Techs used: ReactJS and Material UI SUMI - open banking project, POC - Beginning-to-end full-stack development in React and Spring Boot for the Wipro Digital team’s portfolio.  Work closely with UX designers, project managers, and back-end engineers to implement versatile front-end solutions to web development issues in Scrum. Created different pages like login, dashboard account list with stateless components. Learned test driven development using Jest, got SCRUM/Agile experience; Front end included ReacttJS, Redux, Material UI, CSS'
            />

            <Experience
              startYear={2017}
              endYear={2019}
              jobName='IT Support Associate at SAP'
              jobDescription='Fully qualify all incoming IT calls, chats and support tickets in adherence to the agreed SLA. Act as the first point of contact for all internal SAP employees for infrastructure based issues. Apply solutions, workarounds, patches and fixes as defined in our Knowledge Base.'
            />
            <Experience
              startYear={2016}
              endYear={2016}
              jobName='Software Developer Intern at Silicon Armada'
              jobDescription='Worked at an Irish start-up company made a job aggregator for IT people; Debugged and scripted Python scripts for web scraping; Written system documentation in support of the code'
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
            <Skills skill='React' progress={50} />
            <Skills skill='HTML/CSS' progress={60} />
            <Skills skill='JavaScript' progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
