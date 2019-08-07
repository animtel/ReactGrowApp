import React, { Component } from "react";

class ComponentsLifeCycle extends Component {
  constructor(props) {
    //first in lifecycle
    super(props);
    this.state = { buttonClass: "off", label: "Press me.", counter: 0 };
    this.press = this.press.bind(this); // it's need because functions have custome context and for it we need to bind them new context of out component
  }

  componentWillMount() {
    //second in lifecycle
    console.log("componentWillMount()");
    console.log("Called before the render of page");
  }

  press(e) {
    console.log(e);

    let className = this.state.buttonClass === "off" ? "on" : "off";

    this.setState(function(prevState, props) {
      //we need to define this handler because update of state can be async and we need always to be sure with val
      return {
        counter: prevState.counter + props.increment
      };
    });
    console.log(this.state.counter);

    this.setState({ buttonClass: className });
  }

  render() {
    // third in life cycle. If shouldComponentUpdate returns true
    console.log("render()");
    return (
      <button onClick={this.press} className={this.state.buttonClass}>
        {this.state.label}
      </button>
    );
  }

  componentDidMount() {
    // fourth in life cycle
    console.log("componentDidMount()");
    console.log(
      "Called after rendering of the page. Here you can make requests to the removed resources."
    );
  }

  componentWillUnmount() {
    // fifth in life cycle
    console.log("componentWillUnmount()");
    console.log("Called before removing of the component from DOM");
  }

  // it was functions witch called when we create. But we also have functions which will be called when we'll update the page:

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    console.log(
      "It'll be called each onec when we will update props or state; True or false mark, do we need to make update, or not; By default return true;"
    );
    return true;
  }

  //called before update of the component
  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate()");
    console.log();
  }

  //called after update of the component
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate()");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps");
  }
}

export default ComponentsLifeCycle;
