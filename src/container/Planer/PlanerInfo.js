import React, { useState } from "react";
import styled from "@emotion/styled";

const Create = styled.input`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: large;
  border: 1px solid transparent;
  margin-left: 80%;
  margin-bottom: 4%;
  color: azure;
  background-color: rgb(27, 59, 111);
  &:hover {
    border: 1px solid azure;
    border-radius: 15px;
    width: fit-content;
  }
`;

const PlanerBox = styled.div`
  border: 1px solid;
  border-radius: 70px 30px;
  width: 80%;
  background-color: rgb(27, 59, 111);
  margin: 10px;
`;

const Heading = styled.h1`
  text-align: center;
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  color: azure;
  margin: 4%;
`;
const Row = styled.div`
  justify-content: space-between;
  display: flex;
`;

const Info = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  color: azure;
  margin-right: 30px;
  margin-left: 3%;
  align-self: center;
`;

const SelectItems = styled.select`
  border-radius: 15px;
  border: transparent;
  width: 50%;
  height: fit-content;
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: large;
  text-align: center;
  align-self: center;
  margin-right: 25%;
`;
const LecureDate = styled.input`
  border: transparent;
  border-radius: 15px;
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: large;
  text-align: center;
  width: 50%;
  height: fit-content;
  align-self: center;
  margin-right: 25%;
`;

const DisplayText = styled.h3`
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  border-radius: 15px;
  border: transparent;
  width: 510px;
  height: fit-content;
  font-size: large;
  text-align: center;
  align-self: center;
  margin-right: 34%;
  background-color: white;
  font-weight: normal;
`;

const Content = styled.input`
  border: transparent;
  border-radius: 15px;
  font-family: "Libre Baskerville", serif;
  font-family: "PT Serif", serif;
  font-size: large;
  text-align: center;
  width: 510px;
  height: fit-content;
  align-self: center;
  margin-right: 34%;
`;
function PlanerInfo(props) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSelectChange = (event) => {
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: event.target.value }));
  };
  const handleValueSelectChange = (event) => {
    props.handleValueChange(event.target.value);
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: event.target.value }));
  };
  const handleModuleChange = (event) => {
    props.moduleChange(event.target.value);
    const name = event.target.name;
    setInputs((values) => ({ ...values, [name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //props.module.addLecture(inputs);
    alert(inputs);
    console.log(inputs);
    window.location.href = "/home";
  };

  return (
    <PlanerBox>
      <Heading>Lecture planer</Heading>
      <form>
        <Row>
          <Info>Select Course</Info>
          <SelectItems>
            <option>Select Course</option>
          </SelectItems>
        </Row>

        <Row>
          <Info>Select Capture</Info>
          <SelectItems>
            <option>Select Capture</option>
          </SelectItems>
        </Row>
        <Row>
          <Info>Topic</Info>
        </Row>
        <Row>
          <Info>Content: </Info>
        </Row>

        <Row>
          <Info>Select room</Info>
          <SelectItems>
            <option>Select room</option>
          </SelectItems>
        </Row>

        <Row>
          <Info>Select date</Info>
          <LecureDate type="date"></LecureDate>
        </Row>

        <Row>
          <Info>Select timeslot</Info>
          <SelectItems placeholder="time_slot">
            <option>Select time slot</option>
            <option>08:00 - 10:00</option>
            <option>10:00 - 12:00</option>
            <option>12:00 - 15:00</option>
            <option>15:00 - 17:00</option>
          </SelectItems>
        </Row>
      </form>
      <Create type="submit" value="Create lecture" />
    </PlanerBox>
  );
}

export default PlanerInfo;

/*

function PlanerInfo(props) {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSelectChange = (event) => {
    const name = event.target.name;
    setInputs(values => ({ ...values, [name]: event.target.value }))
  }
  const handleValueSelectChange = (event) => {
    props.handleValueChange(event.target.value)
    const name = event.target.name;
    setInputs(values => ({ ...values, [name]: event.target.value }))
  }
  const handleModuleChange = (event) => {
    props.moduleChange(event.target.value)
    const name = event.target.name;
    setInputs(values => ({ ...values, [name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //props.module.addLecture(inputs);
    alert(inputs);
    console.log(inputs);
    window.location.href = "/home";
  }
  //planerbox and row are divs. Selectitems are a select
  return (
    <PlanerBox>
      <Heading>Lecture planer</Heading>
      <form onSubmit={handleSubmit} >
        <Row>
          <Info>Select Course</Info>
          <SelectItems name="course_id"
            onChange={handleValueSelectChange}>
            <option>Select Course: </option>
            {props.courses.map((course) => {
              return (
                <option value={course.id} >
                  {course.course_name}
                  {console.log(course)}
                </option>
              )
            })}
          </SelectItems>
        </Row>
        <Row>
          <Info>Select Capture</Info>
          <SelectItems name="course_modules"
            onChange={handleModuleChange}>
            <option>Select Capture</option>
            {props.courses[props.theCourse].course_modules.map((modules) => {
              return (
                <option value={modules.module - 1}>
                  Module {modules.module}
                </option>
              )
            })}
          </SelectItems>
        </Row>

        <Row>

          <Info>Topic</Info>
          <DisplayText>
            {props.courses[props.theCourse].course_modules[props.theModule].topic}
          </DisplayText>
        </Row>

        <Row>
          <Info>Content:</Info>
          <Content type="text"
            name="Content"
            placeholder="Enter content"
            value={inputs.Content || ""}
            onChange={handleChange}>
          </Content>
        </Row>

        <Row>
          <Info>Select room</Info>
          <SelectItems name="room"
            onChange={handleSelectChange}>
            <option>Select room</option>
            {props.rooms.map((room) => {
              return (
                <option value={room.id}>
                  {room.room_name}
                </option>)
            })}
          </SelectItems>
        </Row>

        <Row>
          <Info>Select date</Info>
          <LectureDate name="date"
            type="date"
            onChange={handleChange} />
        </Row>
        <Row>
          <Info>Select timeslot</Info>
          <SelectItems name="time"
            placeholder="time_slot"
            onChange={handleSelectChange}>
            <option>Select time slot</option>
            <option value="08:00-10:00">08:00 - 10:00</option>
            <option value="10:00-12:00">10:00 - 12:00</option>
            <option value="13:00-15:00">13:00 - 15:00</option>
            <option value="15:00-17:00">15:00 - 17:00</option>
          </SelectItems>
        </Row>
        <Create type="submit"></Create>
      </form>

    </PlanerBox>
  );

}

function eventPrinter(event) {
  console.log(event.target);
}





*/
