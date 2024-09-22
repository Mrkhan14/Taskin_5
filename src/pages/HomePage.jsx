import React, { Component, Fragment } from "react";
import Counter from "../components/shares/Counter";
import Container from 'react-bootstrap/Container';
export class HomePage extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      mounting: true,
    };
  }
  // componentWillMount() {
  //   console.log("componentWillMount");
  // }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  // shouldComponentUpdate() {
  //   return false;
  // }
  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }
  render() {
    console.log("Render");
    const toggle = () => {
      this.setState({ mounting: !this.state.mounting });
    };
    return (
      <Fragment>
        <Container>  
          <section>
            <div className="container">
              <h1>HomePage</h1>
              <button onClick={toggle}>Toggle</button>
              {this.state.mounting && <Counter />}
            </div>
          </section>
        </Container>
      </Fragment>
    );
  }
}

export default HomePage;
