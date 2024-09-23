import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

export class AboutNewsPage extends Component {
   render() {
      return (
         <Fragment>
            <section>
               <div className='container'>
                  <Link to='/about' className='d-block w-25 mt-3 border p-3'>
                     Go back
                  </Link>

                  <h1 className='text-center'>About News Page</h1>
               </div>
            </section>
         </Fragment>
      );
   }
}

export default AboutNewsPage;
