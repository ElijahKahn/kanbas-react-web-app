import React, { useEffect, useState } from "react";
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
  setModules
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";


function ModuleList() {
  const { courseId } = useParams();
  

  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

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
         onClick={handleAddModule}>
        Add
      </button>

      <button className="float-end btn btn-primary"
        onClick={handleUpdateModule}>
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
                onClick={() => handleDeleteModule(module._id)}>
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