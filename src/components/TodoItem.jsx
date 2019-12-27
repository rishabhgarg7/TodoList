import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.removefunc(this.props.id);
  }

  render() {
    return (
      <div className="TodoItem">
        <h3>{this.props.name}</h3>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
