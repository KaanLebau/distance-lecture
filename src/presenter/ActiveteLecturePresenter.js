import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import CourseSelector from "../container/ActivateLecture/CourseSelector";
import LectionSelector from "../container/ActivateLecture/LectionSelector";

const Box = styled.div`
  background-color: rgb(159, 179, 194);
  text-align: center;
`;
function ActiveteLecturePresenter(props) {
  const [courses, setCourses] = React.useState([]);
  const [lectures, setLectures] = React.useState([]);
  const [course, setCourse] = React.useState("");
  const [state, setState] = React.useState(false);
  const [lecture, setLecture] = React.useState("");
  //console.log(course.id);

  useEffect(() => {
    setCourses(props.courses);
    setState(false);
    courses.map((opt) => {
      if (opt.course_name === course) {
        setLectures(opt.course_lectures);
        setState(true);
      }
    });
  }, [course, props.courses, courses]);

  return (
    <Box>
      <CourseSelector
        selectedCourse={(theCourse) => setCourse(theCourse)}
        courses={props.courses}
      />
      <LectionSelector lectures={props.courses[0].course_lectures} />
    </Box>
  );
}

export default ActiveteLecturePresenter;
