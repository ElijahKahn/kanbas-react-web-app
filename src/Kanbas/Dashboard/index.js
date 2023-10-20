import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaFileAlt } from "react-icons/fa";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="col" id="profile">
      <h1>Dashboard</h1>
      <hr></hr>

      <div class="col-8" id="pub-courses">
                <h5>Published Courses ({courses.length})</h5>
                <hr></hr>
      

      {courses.map((course) => (
      
          <Link to={`/Kanbas/Courses/${course._id}`} className="card-deck-">
           
           <div className="card" style={{ width: "18rem", margin: "10px", display: "inline-block"}}>
           <img src={course.image} class="card-img-top" alt="..." style= {{ height: "150px"}}></img>
           <div class="card-body">
             <h5 class="card-title">{course.number}</h5>
             <h6 class="card-sub">{course.name}</h6>
             <a href="#" > <FaFileAlt style = {{ fontsize: 25}}/></a>
           </div>
         </div>
         </Link>
      ))}
      </div>
    </div>
  );
}
export default Dashboard;