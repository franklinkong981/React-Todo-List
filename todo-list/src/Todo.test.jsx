import React from "react";
import {render} from "@testing-library/react";
import Todo from "./Todo.jsx";

const removeTodo = () => {
  console.log("Removed todo");
};

const toggleTodo = () => {
  console.log("Toggled todo");
};

it("renders without crashing", function() {
  render(<Todo id="1" content="Pass the test" completed={false} removeTodoFunction={removeTodo} toggleTodoFunction={toggleTodo}/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Todo id="1" content="Pass the test" completed={false} removeTodoFunction={removeTodo} toggleTodoFunction={toggleTodo}/>);
  expect(asFragment()).toMatchSnapshot();
});