import React, { Component } from "react";

export default class AnotherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  passToParent = () => {};
  render() {
    //destrcuting for props
    const { myName, myAge, myFunc } = this.props;
    return (
      <div>
        <h1>Another Component</h1>
        <p>MyName: {myName}</p>
        <p>MyAge: {myAge}</p>
        <button onClick={myFunc}>Passing Data to Parent</button>
      </div>
    );
  }
}
