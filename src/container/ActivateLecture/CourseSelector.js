import React from "react";
import styled from "@emotion/styled/";

const SelectCourse = styled.select`
  border-radius: 15px;
  border: transparent;
  width: 50%;
  height: fit-content;
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: large;
  text-align: center;
  margin: 0 auto;
  margin-top: 10px;
`;
function CourseSelector(props) {
  return (
    <div>
      <SelectCourse
        onChange={(e) => {
          props.selectedCourse(e.target.value);
        }}
      >
        <option> {"Select Course:"} </option>
        {props.courses.map((opt) => {
          return <option key={opt.id}> {opt.course_name} </option>;
        })}
      </SelectCourse>
    </div>
  );
}

export default CourseSelector;
