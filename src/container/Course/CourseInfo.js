import React from "react";

function courseInfo(props) {
  return (
    <div className="course">
      <h3 className="cn">{props.course[0].name}</h3>

      <h3 className="ci">Course id: {props.course[0].id}</h3>
      <div className="itp">
        <h3 className="ci">Termin: {props.course[0].termin}</h3>
        <h3 className="ci">Period: {props.course[0].period}</h3>
      </div>

      <h3 className="ci">
        Registred Students: {props.course[0].registredStudents}
      </h3>
      <h3 className="ci">Module: Demo 2</h3>
    </div>
  );
}

export default courseInfo;
