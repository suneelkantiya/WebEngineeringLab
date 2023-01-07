export class Student {
  constructor(id, name, dob) {
    this.id = id;
    this.name = name;
    this.dob = dob;
  }

  enroll() {
    console.log(`${this.name} has enrolled.`);
  }
}
