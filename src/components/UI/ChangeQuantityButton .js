import React from "react";

export default class ChangeQuantityButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}
