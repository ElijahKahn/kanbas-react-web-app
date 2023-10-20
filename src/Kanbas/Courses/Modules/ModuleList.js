import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          
          <ul className="list-group">
          <li className="list-group-item list-group-item-secondary">
            <i style={ {marginRight: 5}}><AiFillCaretDown/></i>
            {module.name}
            <i className="float-end"><FaEllipsisV/></i>
            <i className="float-end" style={ {marginRight: 10}}><AiOutlinePlus/></i>
            <i className="float-end" style={ {marginRight: 10}}><AiFillCaretDown/></i>
            <i className="float-end"><BsFillCheckCircleFill/></i>


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
