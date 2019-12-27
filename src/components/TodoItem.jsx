import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, name: this.props.name };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete() {
    this.props.removefunc(this.props.id);
  }

  handleEdit(evt) {
    this.setState({ isEditing: true });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    this.props.editfunc(this.props.id, this.state.name);
    this.setState({ isEditing: false, name: this.state.name });
  }

  render() {
    return (
      <div className="TodoItem">
        {this.state.isEditing ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
          </form>
        ) : (
          <h3>{this.props.name}</h3>
        )}
        <button onClick={this.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
}

export default TodoItem;
