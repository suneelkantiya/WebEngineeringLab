import 'babel-polyfill';
import './app-style.scss';
import { getStudents, addStudent, deleteStudent } from './students';
import { getFaculties, addFaculty, deleteFaculty } from './faculties';
import { getEvents, addEvent, deleteEvent } from './events';

function renderStudents() {
    const studentsTable = document.querySelector('.students table');
    const students = getStudents();

    studentsTable.innerHTML = '';

    for (const student of students) {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.course}</td>
      <td><button class="delete" data-id="${student.id}">Delete</button></td>
    `;
        studentsTable.appendChild(row);
    }
}

function renderFaculties() {
    const facultiesTable = document.querySelector('.faculties table');
    const faculties = getFaculties();

    facultiesTable.innerHTML = '';

    for (const faculty of faculties) {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${faculty.name}</td>
      <td>${faculty.department}</td>
      <td><button class="delete" data-id="${faculty.id}">Delete</button></td>
    `;
        facultiesTable.appendChild(row);
    }
}

function renderEvents() {
    const eventsTable = document.querySelector('.events table');
    const events = getEvents();

    eventsTable.innerHTML = '';

    for (const event of events) {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${event.name}</td>
      <td>${event.date}</td>
      <td><button class="delete" data-id="${event.id}">Delete</button></td>
    `;
        eventsTable.appendChild(row);
    }
}

function handleAddStudentFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.elements['name'].value;
    const course = form.elements['course'].value;

    addStudent(name, course);
    renderStudents();

    form.reset();
}

function handleAddFacultyFormSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
    const name = form.elements['name'].value;
    const department = form.elements['department'].value;
  
    addFaculty(name, department);
    renderFaculties();
  
    form.reset();
  }

  function handleAddEventFormSubmit(event) {
    event.preventDefault();
  
    const form = event.target;
    const name = form.elements['name'].value;
    const date = form.elements['date'].value;
    const location = form.elements['location'].value;
  
    addEvent(name, date, location);
    renderEvents();
  
    form.reset();
  }

  function handleDeleteButtonClick(event) {
    // code to handle delete button click for students, faculties, and events
  }
  
  const addStudentForm = document.querySelector('.students form');
  addStudentForm.addEventListener('submit', handleAddStudentFormSubmit);
  
  const addFacultyForm = document.querySelector('.faculties form');
  addFacultyForm.addEventListener('submit', handleAddFacultyFormSubmit);
  
  const addEventForm = document.querySelector('.events form');
  addEventForm.addEventListener('submit', handleAddEventFormSubmit);
  
  const deleteButtons = document.querySelectorAll('.delete');
  for (const button of deleteButtons) {
    button.addEventListener('click', handleDeleteButtonClick);
  }



