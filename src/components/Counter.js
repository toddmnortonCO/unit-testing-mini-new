import React, { Component } from 'react';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
        <p>You've clicked {this.state.count} times!</p>
        <button
          data-testid="counter-button"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          Increment Count
        </button>
      </div>
    );
  }
}
