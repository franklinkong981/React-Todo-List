import React from "react";
import {render} from "@testing-library/react";
import NewTodoForm from "./NewTodoForm.jsx";

const addTodo = () => {
  console.log("Todo added!");
}

it("renders without crashing", function() {
  render(<NewTodoForm addTodoFunction={addTodo}/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<NewTodoForm addTodoFunction={addTodo}/>);
  expect(asFragment()).toMatchSnapshot();
});