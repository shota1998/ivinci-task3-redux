import React from "react";
import { connect } from "react-redux";

import { ADD_ITEM } from "../../redux/actionTypes";

import { addItem, removeItem } from "../../redux/actions";

class ChangeQuantityButton extends React.Component {
  handleAddItem = () => {
    if (this.props.actionType === ADD_ITEM) {
      this.props.addItem(this.props.id);
    } else {
      this.props.removeItem(this.props.id);
    }
  };

  render() {
    return <button onClick={this.handleAddItem}>{this.props.children}</button>;
  }
}

export default connect(null, { addItem, removeItem })(ChangeQuantityButton);
