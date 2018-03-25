import React, { Component } from "react";

class TodoItems extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo, index) => (
          <li key={todo} item={todo}>
            {todo} <span onClick={this.props.handleDelete}>X</span>
          </li>
        ))}
      </ul>
    );
  }
}

// MAIN COMPONENT
class Todo extends Component {
  state = {
    name: "Nathaneals",
    todos: ["HTML", "CSS", "JAVASCRIPT"],
    newTodo: ""
  };
  myInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.myInput.value);
    const todos = [...this.state.todos];
    todos.push(this.myInput.value.toUpperCase());
    this.setState({ todos: todos });
    e.target.reset();
  };

  handleDelete = item => {
    const todos = this.state.todos.filter((value, index) => item !== value);
    this.setState({ todos });
  };

  render() {
    // const todo = this.state.todos.map((item, index) => (
    //   <li key={index}>{item}</li>
    // ));

    return (
      <div>
        <h1>SIMPLE TODO APP</h1>
        <h1>{this.state.name}</h1>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref={myInput => (this.myInput = myInput)}
            placeholder="What do you want to do"
          />
          <button type="submit">SAVE</button>
        </form>
        <TodoItems todos={this.state.todos} handleDelete={this.handleDelete} />
      </div>
    );
  }
}
export default Todo;
