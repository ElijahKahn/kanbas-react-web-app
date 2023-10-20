import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import "../../Assignments/index.css"




function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const params = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="container-flex">
      <div className="row">
        <div className="col-10">
          
          <div className="row" id="home-btns">
            <div className="col">
              <b>
                <p id="assignmnet-pub"><i><BsFillCheckCircleFill /></i>Published</p>
              </b>
              <button className="btn btn-light">
                <FaEllipsisV />
              </button>
              <hr />
            </div>
          </div>

          <div className="row" id="profile-content">
            <label for="name1" className="col-12 col-form-label">
              <p className="assign">Assignment Name</p>
            </label>
            <div className="col-12 assignment-title">
              <input value={assignment.title} className="form-control mb-2" />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="textarea1"
                  rows="5"
                  cols="60"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="col-5" id="assign-info">
            <div className="mb-3">
              <label for="points" className="col-form-label">
                <p className="assign">Points</p>
              </label>
              <input
                type="text"
                className="form-control"
                id="points"
                value="100"
              />

              <label for="assignment-group" className="col-form-label">
                <p className="assign">Assignment Group</p>
              </label>
              <select name="assignment-group" className="form-select">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
              </select>

              <label for="display-grade" className="col-form-label">
                <p className="assign">Display Grade as</p>
              </label>
              <select name="display-grade" className="form-select">
                <option value="PERCENTAGE">Percentage</option>
              </select>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Do not count this assignment toward the final grade
                </label>
              </div>

              <label for="submission-type" className="col-form-label">
                Submission Type
              </label>
              <div className="card">
                <select id="select-type" className="form-select">
                  <option value="ONLINE">Online</option>
                </select>
                <label for="form-check-labels">
                  <b>Online Entry Options</b>
                </label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="text-entry"
                  />
                  <label className="form-check-label" for="text-entry">
                    Text Entry
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="website-url"
                  />
                  <label className="form-check-label" for="website-url">
                    Website URL
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="media-recording"
                  />
                  <label className="form-check-label" for="media-recording">
                    Media Recording
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="student-annotation"
                  />
                  <label className="form-check-label" for="student-annotation">
                    Student Annotation
                  </label>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="file-uploads"
                  />
                  <label className="form-check-label" for="file-uploads">
                    File Uploads
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="content-change"
            />
            <label className="form-check-label" for="content-change">
              Notify users that this content has changed
            </label>
          </div>

          <div className="mb-3 row" id="bottom-btns">
            <div className="col">
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light float-end"
              >
                Cancel
              </Link>
              <a href="index.js">
                <button onClick={handleSave} className="btn btn-danger me-2 float-end">
                  Save
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;

{/* <pre>
              <code>{JSON.stringify(params, null, 2)}</code>
              </pre> */}