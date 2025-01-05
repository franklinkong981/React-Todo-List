import react from "react";
import {useFormik} from 'formik';

const NewTodoForm = ({addTodoFunction}) => {
  const formik = useFormik({
    initialValues:{
      content: ''
    },
    onSubmit: values => {
      addTodoFunction(values.content);
    }
  });

  return (
    <form className="NewTodoForm" onSubmit={formik.handleSubmit}>
        <label htmlFor="todo-input-field">Enter New Todo:</label>
        <input id="todo-input-field" className="NewTodoForm-todo-input" type="text" name="content"
        value={formik.values.content} onChange={formik.handleChange}/>
        <button type="submit">Add New Todo</button>
    </form>
  );
};

export default NewTodoForm;