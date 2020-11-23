import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "Go to bed" },
      { id: 2, title: "Have Food" },
      { id: 3, title: "Go to bed" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log(e);
  };
  handleSubmit = (e) => {
    console.log(e);
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = (id) => {
    console.log(`handle Delete ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle edit ${id}`);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
