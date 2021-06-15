import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myString = "",
      showString = false,
    }
  }

  render() {
    return(
      <div>
        <h2>Class Components</h2>
        <button onClick={}>Click me!</button>
      </div>
    )
  }
}

export default Class;