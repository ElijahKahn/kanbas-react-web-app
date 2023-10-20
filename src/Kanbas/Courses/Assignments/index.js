import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css"

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="col-10">
      <div className="row" id="home-btns">
        <div className="col">
          <input type="text" className="form-control w-25 float-start" placeholder="Search for Assignment" />
          <button className="btn btn-light"> <AiOutlinePlus/>Group</button>
          <button className="btn btn-danger"> <AiOutlinePlus/>Assignment</button>
          <button className="btn btn-light"><FaEllipsisV/></button>
          <hr />
        </div>
      </div>

      <div className="list-group">
      <li className="list-group-item list-group-item-secondary">
            <i style={ {marginRight: 5}}><AiFillCaretDown/></i>
            <b style={{fontSize: 20 }}>Assignments</b>
            <div className="float-end">
              <p className="rounded">40% of Total</p>
              <i><AiOutlinePlus/></i>
              <i><FaEllipsisV/></i>
            </div>
          </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
              {assignment.title}
              <div className="float-end">
                <i><BsFillCheckCircleFill/></i>
                <i><FaEllipsisV/></i>

              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
