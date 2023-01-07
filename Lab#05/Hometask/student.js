import { University } from './university';
import { Course } from './course';

export class Student {
  constructor(id, name, dob, university, courses) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.university = university;
    this.courses = courses;
  }

  enroll() {
    console.log(`${this.name} has enrolled.`);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  belongsToUniversity(university) {
    this.university = university;
  }
}
