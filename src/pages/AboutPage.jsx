import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class AboutPage extends Component {
   render() {
      return (
         <Fragment>
            <section>
               <div className='container'>
                  <h1>AboutPage</h1>
                  <Link to='/about/team' className='me-3'>
                     Team
                  </Link>
                  <Link to='/about/partners'>Partners</Link>
               </div>
            </section>
            <section></section>
         </Fragment>
      );
   }
}

export default AboutPage;
