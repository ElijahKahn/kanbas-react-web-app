import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";


function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (

    <ul className="list-group">
    <li className="list-group-item">
      <input className="float-start"
        value={module.name}
        onChange={(e) =>
          dispatch(setModule({ ...module, name: e.target.value }))
        } />
      <textarea className="float-start"
        value={module.description}
        onChange={(e) =>
          dispatch(setModule({ ...module, description: e.target.value }))
        } />

      <button className="float-end btn btn-success"
        onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
        Add
      </button>

      <button className="float-end btn btn-primary"
        onClick={() => dispatch(updateModule(module))}>
        Update
      </button>
    </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (


          <ul className="list-group">

            <li className="list-group-item list-group-item-secondary">

              <button className="float-end btn btn-success"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button className="float-end btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>

              <i style={{ marginRight: 5 }}><AiFillCaretDown /></i>
              {module.name}
              <i className="float-end"><FaEllipsisV /></i>
              <i className="float-end" style={{ marginRight: 10 }}><AiOutlinePlus /></i>
              <i className="float-end" style={{ marginRight: 10 }}><AiFillCaretDown /></i>
              <i className="float-end"><BsFillCheckCircleFill /></i>

            </li>
            <li className="list-group-item">
              {module.description}
            </li>
          </ul>

        ))}
      </ul>
  );
}
export default ModuleList;


{/* <li className="list-group-item">
<input
value={module.name}
onChange={(e) =>
  dispatch(setModule({ ...module, name: e.target.value }))
} />
<textarea
value={module.description}
onChange={(e) =>
  dispatch(setModule({ ...module, description: e.target.value }))
} />

<button className="float-end btn btn-success"
onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
Add
</button>

<button className="float-end btn btn-primary"
onClick={() => dispatch(updateModule(module))}>
Update
</button>
</li> */}