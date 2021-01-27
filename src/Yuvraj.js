import React, { Component } from "react";
import AnotherComponent from "./AnotherComponent";

export default class Yuvraj extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "yuvraj singh hjashJKSA",
      age: 32,
      classes: "1st",
      college: "Udaipur",
      area: "rajasthan",
      myName: "YUVRAJ SINGH CHOUHAN",
    }; //empty object //initialize State for Class Based Component
  }
  // let and const
  variablesFunction = () => {
    // let a = 100,
    //   b = 200;

    // const arrayOfMine = { x: a, y: b };
    // console.log(arrayOfMine.x, arrayOfMine.y);

    // a = 2000;
    // b = 4000;
    // arrayOfMine.x = a;
    // arrayOfMine.y = b;
    // console.log(arrayOfMine.x, arrayOfMine.y);

    const MY_GRADES = [1, 3, 6];
  };

  //
  increment = () => {
    // console.log("CLick on increment");
    this.setState(
      {
        age: this.state.age + 1,
      },
      () => {
        // console.log("State Updated Inside State", this.state.age);
      }
    );
    // console.log("State Updated", this.state.age);
    this.variablesFunction();
  }; // Node JS single thread and asynchronous
  callFromChild = () => {
    console.log("Calling from CHild");
    this.setState({
      age: 90,
    });
  };
  render() {
    const { name, age, classes, college, area, myName } = this.state; //destructring
    return (
      <div>
        Yuvraj Component
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Class: {classes}</p>
        <p>College: {college}</p>
        <p>Area: {area}</p>
        <button onClick={this.increment}>Increment</button>
        <AnotherComponent
          myName={myName}
          myAge={age}
          myFunc={this.callFromChild}
        />
        {/* passing value through props */}
      </div>
    );
  }
}
