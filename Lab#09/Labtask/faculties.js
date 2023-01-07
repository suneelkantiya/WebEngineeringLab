const faculties = [
    { id: 1, name: 'Miss Hafsa', department: 'Software Engineering' },
    { id: 2, name: 'Sir Hassan', department: 'Software Engineering' },
    { id: 3, name: 'Miss Sanober', department: 'Software Engineering' }
  ];
  
  export function getFaculties() {
    return faculties;
  }
  
  export function addFaculty(faculty) {
    faculties.push(faculty);
  }
  
  export function deleteFaculty(facultyId) {
    const index = faculties.findIndex(faculty => faculty.id === facultyId);
    if (index !== -1) {
      faculties.splice(index, 1);
    }
  }
  