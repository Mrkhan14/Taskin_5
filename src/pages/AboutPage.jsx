import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class AboutPage extends Component {
   render() {
      return (
         <Fragment>
            <section>
               <div className='container'>
                  <h1>AboutPage</h1>

                  <Link to='/about/news' className='me-3'>
                     News
                  </Link>

                  <Link to='/about/team' className='me-3'>
                     Team
                  </Link>
               </div>
            </section>
         </Fragment>
      );
   }
}

export default AboutPage;
