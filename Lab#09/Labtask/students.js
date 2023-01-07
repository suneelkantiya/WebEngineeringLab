const students = [
    { id: 1, name: 'Zawwar Asif', course: 'Web-Engineering' },
    { id: 2, name: 'Faraz Gul', course: 'Information-Security' },
    { id: 3, name: 'Naufil Mansoor', course: 'Compiler-Construction' }
  ];
  
  export function getStudents() {
    return students;
  }
  
  export function addStudent(student) {
    students.push(student);
  }
  
  export function deleteStudent(studentId) {
    const index = students.findIndex(student => student.id === studentId);
    if (index !== -1) {
      students.splice(index, 1);
    }
  }
  