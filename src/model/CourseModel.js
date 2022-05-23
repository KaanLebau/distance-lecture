import { Course } from "./data/ModelData";

class CourseModel {
  constructor() {
    this.Courses = Course;
    this.Course = null;
    this.activeLecture = 0;
  }

  getCourses() {
    return this.Courses;
  }

  getTheCourse(param) {
    this.Course = this.Courses[param];
    return this.Course;
  }
  getTheCourseName() {
    return this.Course.course_name;
  }

  getTheCourseId() {
    return this.Course.course_id;
  }
  getTheTermin() {
    return this.Course.course_termin;
  }
  getThePeriod() {
    return this.Course.course_period;
  }
  getTheModules() {
    return this.Course.course_modules;
  }
  getTheLectures() {
    return this.Course.course_lectures;
  }

  getTheRegistredStudents() {
    return this.Course.course_registredStudents;
  }

  getActiveLecture() {
    return this.Course.course_lectures[this.activeLecture];
  }

  setActiveLecture(activateID) {
    this.activeLecture = activateID;
  }

  setTheCourse(courseID) {
    this.Course = this.Courses[courseID];
  }
  addLecture(param) {}
}

export default CourseModel;
