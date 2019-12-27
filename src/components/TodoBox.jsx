import React, { Component } from "react";
import "./TodoBox.css";

import uuid from "uuid";

import TodoItem from "./TodoItem";

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = { nameOfItem: "", items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.remove = this.remove.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let newItem = {
      id: uuid(),
      name: this.state.nameOfItem
    };

    this.setState({
      nameOfItem: "",
      items: [...this.state.items, ...[newItem]]
    });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  remove(itemId) {
    this.setState({
      items: this.state.items.filter(item => item.id !== itemId)
    });
  }

  edit(itemId) {
    this.setState({
      items: this.state.items.filter(item => {
        if (item.id === itemId) {
          let newItem = { ...{ item } };
        } else {
          return item;
        }
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Ultimate To-do list</h1>
        <h4> That gets the shit done.</h4>
        {this.state.items.map(item => (
          <TodoItem
            name={item.name}
            key={item.id}
            id={item.id}
            removefunc={this.remove}
            editfunc={this.edit}
          />
        ))}

        <div>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="nameOfItem">New Todo</label>
            <input
              type="text"
              value={this.state.nameOfItem}
              placeholder="name of the task"
              name="nameOfItem"
              onChange={this.handleChange}
            />
            <button type="submit">+</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoBox;
