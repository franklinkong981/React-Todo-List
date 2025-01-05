import react from "react";
import {useFormik} from 'formik';
import "./NewTodoForm.css";

const NewTodoForm = ({addTodoFunction}) => {
  const formik = useFormik({
    initialValues:{
      content: ''
    },
    onSubmit: values => {
      addTodoFunction(values.content);
      values.content = "";
    }
  });

  return (
    <form className="NewTodoForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="todo-input-field" className="NewTodoForm-input-label">Enter New Todo:</label>
        <input id="todo-input-field" className="NewTodoForm-todo-input" type="text" name="content" size="50"
        value={formik.values.content} onChange={formik.handleChange}/>
        <button className="NewTodoForm-submit-button" type="submit">Add New Todo</button>
    </form>
  );
};

export default NewTodoForm;