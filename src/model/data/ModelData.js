const module1 = {
  module: 1,
  topic: "Stakeholder",
  description: "Role play character in project",
  content: "how to contact customer",
};
const module2 = {
  module: 2,
  topic: "Manager",
  description: "Role play character in project",
  content: "how to take delegate responsibility",
};
const module3 = {
  module: 3,
  topic: "Architect",
  description: "Role play character in project",
  content: "how to create architecture documentation",
};
const module4 = {
  module: 4,
  topic: "Developer",
  description: "Role play character in project",
  content: "How to use different patern during development",
};
const module5 = {
  module: 5,
  topic: "Tester",
  description: "Role play character in project",
  content: "Which tests are necessary for the product",
};
const module6 = {
  module: 6,
  topic: "Enviroment",
  description: "Role play character in project",
  content: "how the work environment affects productivity",
};
const dummyModel = {
  module: "X",
  topic: "dummy topic",
  description: "dummy description",
  content: "how the work environment affects productivity",
};

const lecture1 = {
  date: "02-05-2022",
  time: "10:00 - 12:00",
  room: "Lecture room A",
  capture: module1,
  content: "how to contact customer",
};
const lecture2 = {
  date: "02-06-2022",
  time: "08:00 - 10:00",
  room: "Lecture room B",
  capture: module2,
  content: "how to take delegate responsibility",
};
const lecture3 = {
  date: "02-07-2022",
  time: "10:00 - 12:00",
  room: "Lecture room A",
  capture: module3,
  content: "how to create architecture documentation",
};
const lecture4 = {
  date: "02-08-2022",
  time: "15:00 - 17:00",
  room: "Lecture room A",
  capture: module4,
  content: "How to use different patern during development",
};
const lecture5 = {
  date: "02-09-2022",
  time: "13:00 - 15:00",
  room: "Lecture room B",
  capture: module5,
  content: "Which tests are necessary for the product",
};
const lecturedummy = {
  date: "XX-YY-ZZZZ",
  time: "TT:MM - TT:MM",
  room: "Lecture room X",
  capture: dummyModel,
  content: "lecture content",
};

export const Course = [
  {
    id: 0,
    course_name: "Project and Project methods",
    course_id: "II1302",
    course_termin: "HT22",
    course_period: "P4",
    course_modules: [module1, module2, module3, module4, module5, module6],
    course_lectures: [lecture1, lecture2, lecture3, lecture4, lecture5],
    course_registredStudents: 104,
  },
  {
    id: 1,
    course_name: "Dummy course",
    course_id: "XX0000",
    course_termin: "XXYY",
    course_period: "XY",
    course_modules: [
      dummyModel,
      dummyModel,
      dummyModel,
      dummyModel,
      dummyModel,
    ],
    course_lectures: [
      lecturedummy,
      lecturedummy,
      lecturedummy,
      lecturedummy,
      lecturedummy,
    ],
    course_registredStudents: 0,
  },
];
