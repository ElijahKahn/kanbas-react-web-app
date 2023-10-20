import React, { useState } from 'react';
import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from "react-icons/fa";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className='container-flex'>
      <div className="breadcrumb" id="b-crumb">
        <button type="button" className="btn" onClick={toggleNav}>
          <i><FaBars/></i>
        </button>
        <nav aria-label="breadcrumb">
          <ol
            className="breadcrumb"
            style={{ "--bs-breadcrumb-divider": "'>'" }}
          >
            <li className="breadcrumb-item">
              <a href="#">{course.number}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {location.pathname.split("/").pop()}
            </li>
          </ol>
        </nav>
      </div>

      {isNavOpen && <CourseNavigation/>}

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
