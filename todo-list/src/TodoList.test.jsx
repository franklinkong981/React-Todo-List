import React from "react";
import {render, fireEvent} from "@testing-library/react";
import TodoList from "./TodoList.jsx";
import { expect, it } from "vitest";

it("renders without crashing", function() {
  render(<TodoList/>);
});

it("matches snapshot", function() {
  const {asFragment} = render(<TodoList/>);
  expect(asFragment()).toMatchSnapshot();
});

it("should add a new todo to the page after the form is submitted AND the user should be able to toggle the todo and remove it", async function() {
  const {getByLabelText, queryByText, findByText} = render(<TodoList/>);

  //at first, there shouldn't be any todos on the page.
  let todoToggleButton = queryByText("Mark as complete");
  expect(todoToggleButton).not.toBeInTheDocument();
  let todoRemoveButton = queryByText("Delete Todo");
  expect(todoRemoveButton).not.toBeInTheDocument();
  //the form, however, should be present.
  let formSubmitButton = queryByText("Add New Todo");
  expect(formSubmitButton).toBeInTheDocument();

  //the user should be able to change the form's input value.
  const todoInput = getByLabelText("Enter New Todo:");
  expect(todoInput.value).toEqual("");
  fireEvent.change(todoInput, {target: {value: "Pass all the tests"}});
  expect(todoInput.value).toEqual("Pass all the tests");

  //The user should be able to submit the form and a new todo corresponding to the form's input should be added to the page.
  fireEvent.click(formSubmitButton);
  todoToggleButton = await findByText("Mark as complete");
  expect(todoToggleButton).toBeInTheDocument();
  todoRemoveButton = await findByText("Delete Todo");
  expect(todoRemoveButton).toBeInTheDocument();

  //The form's todo input field should be reset back to blank.
  expect(todoInput.value).toEqual("");

  //The user should be able to mark the todo as complete and unmark it as incomplete.
  let todoText = todoToggleButton.previousSibling;
  expect(todoText).toHaveTextContent("Pass all the tests");
  expect(todoText).toHaveStyle({textDecoration: "none"});
  fireEvent.click(todoToggleButton);
  expect(todoText).toHaveStyle({textDecoration: "line-through"});
  expect(todoToggleButton).toHaveTextContent("Unmark as incomplete");
  fireEvent.click(todoToggleButton);
  expect(todoText).toHaveStyle({textDecoration: "none"});
  expect(todoToggleButton).toHaveTextContent("Mark as complete");

  //The user should be able to delete the todo and it should no longer be on the page.
  fireEvent.click(todoRemoveButton);
  expect(todoToggleButton).not.toBeInTheDocument();
  expect(todoRemoveButton).not.toBeInTheDocument();
});