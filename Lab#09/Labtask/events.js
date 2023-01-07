const events = [
    { id: 1, name: 'Job Fair', date: '2022-01-01' },
    { id: 2, name: 'Motivational Speaker', date: '2022-02-01' },
    { id: 3, name: 'Sports Gala', date: '2022-03-01' }
  ];
  
  export function getEvents() {
    return events;
  }
  
  export function addEvent(event) {
    events.push(event);
  }
  
  export function deleteEvent(eventId) {
    const index = events.findIndex(event => event.id === eventId);
    if (index !== -1) {
      events.splice(index, 1);
    }
  }
  