import { Student } from './student';

export class RegularStudent extends Student {
  constructor(id, name, dob, major) {
    super(id, name, dob);
    this.major = major;
  }

  attendLab() {
    console.log(`${this.name} is attending a lab.`);
  }
}

export class ExecutiveStudent extends Student {
  constructor(id, name, dob, company) {
    super(id, name, dob);
    this.company = company;
  }

  attendTheory() {
    console.log(`${this.name} is attending a theory class.`);
  }
}
