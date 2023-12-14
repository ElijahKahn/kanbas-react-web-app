import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";



function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app-387f.onrender.com/api/courses";
  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    _id: ""
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      response.data,
      ...courses,
    ]);
    setCourse({
      name: "New Course",      number: "New Number",
      startDate: "2023-09-10", endDate: "2023-12-15",
      _id: ""
    });
  };

  const deleteCourse = async (courseId) => {
    console.log (courseId)
    const response = await axios.delete(
        `${URL}/${courseId}`
    );
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async() => {
    const response = await axios.put(
        `${URL}/${course._id}`,
        course
    );
    setCourses(
        courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        })
    );
  };

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);


  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<Account />} />
          <Route path="Dashboard" element={ 
          <Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse}/>} />
          <Route path="Courses/:courseId/*" element={
            <Courses courses={courses} />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/Admin/Users" element={<UserTable />} />


        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
