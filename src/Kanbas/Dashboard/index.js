import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaFileAlt } from "react-icons/fa";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) 
  
   {
  
  return (
    <div className="col" id="profile">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
      onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
      onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
      onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date" />
      <button className="btn btn-success"onClick={addNewCourse} >
        Add
      </button>
      <button className="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      <hr></hr>

      <div class="col-10" id="pub-courses">
                <h5>Published Courses ({courses.length})</h5>
                <hr></hr>
      

      {courses.map((course) => (
      
          <Link to={`/Kanbas/Courses/${course._id}`} className="card-deck-">
            
           
           <div className="card" style={{ width: "18rem", margin: "10px", display: "inline-block"}}>
           <img src={course.image} class="card-img-top" alt="" style= {{ height: "150px"}}></img>
           <div class="card-body">
             <h5 class="card-title">{course.number}</h5>
             <h6 class="card-sub">{course.name}</h6>
             <a href="#" > <FaFileAlt style = {{ fontsize: 25}}/></a>
             <button className="float-end btn btn-danger"
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
            
             <button className="float-end btn btn-warning"
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

           </div>
         </div>
         </Link>
      ))}
      </div>
    </div>
  );
}
export default Dashboard;