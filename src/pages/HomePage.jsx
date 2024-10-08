// Core
import React, { Component, Fragment } from 'react';
// Components
import Container from 'react-bootstrap/Container';
import Counter from '../components/Counter';
// Function
export class HomePage extends Component {
   constructor(props) {
      super(props);
      console.log('Constructor');
      this.state = {
         mounting: true,
      };
   }
   componentWillMount() {
      console.log('componentWillMount');
   }
   componentDidMount() {
      console.log('componentDidMount');
   }
   componentDidUpdate() {
      console.log('componentDidUpdate');
   }
   shouldComponentUpdate() {
      return false;
   }
   componentWillUnmount() {
      console.log('componentWillUnmount');
   }
   render() {
      const toggle = () => {
         this.setState({ mounting: !this.state.mounting });
      };
      return (
         <Fragment>
            <Container>
               <div className='container'>
                  <h1>HomePage</h1>
                  <button onClick={toggle}>Toggle</button>
                  {this.state.mounting && <Counter />}
               </div>
            </Container>
         </Fragment>
      );
   }
}

export default HomePage;
