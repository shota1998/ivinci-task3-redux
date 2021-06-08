import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/actions";
import classes from "./AddCartButton.module.css";

class AddCartButton extends React.Component {
  handleAddItem = () => {
    this.props.addItem(this.props.id);
  };

  render() {
    return (
      <div className={classes.actions}>
        <button onClick={this.handleAddItem}>Add</button>
      </div>
    );
  }
}

export default connect(null, { addItem })(AddCartButton);
