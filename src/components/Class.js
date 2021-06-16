import React, { Component } from 'react';

class Class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
    // {this.handleClick} -> calls event listener
    // this.handleClick.bind(this) -> binds 'this' specific instance of Class to handleClick method defined within Class
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(show => ({ show: !this.state.show }))
    console.log(this.state.show)
  }

  render() {
    return (
			<div className="class">
				<h2>Class Components</h2>
				<p>
					This is a class component, using a constructor to set and update state
					held within.
				</p>
				<div>
					<button onClick={this.handleClick}>Click me!</button>
					<p>
						If state is updating correctly, clicking the button should toggle
						the true/false value displayed below!
					</p>
					<p>{this.state.show.toString()}</p>
				</div>
			</div>
		);
  }
}

export default Class;