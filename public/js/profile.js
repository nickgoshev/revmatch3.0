const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#project-name').value.trim();
  const date_of_event = document.querySelector('#datepicker').value.trim();
  const location = document.querySelector('#project-location').value.trim();
  const description = document.querySelector('#project-desc').value.trim();
  const time_of_event = document.querySelector('#timepicker').value.trim();
  const picture_url = document.querySelector('#picture-url').value.trim();

  if (name && date_of_event && time_of_event&& location && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, date_of_event, time_of_event, location, description, picture_url }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/myevents');
    } else {
      alert('Failed to create project');
    }
  }
};



$(function(){
  $("#datepicker").datepicker();
})




$(document).ready(function(){

$('input.timepicker').timepicker({
  timeFormat: 'h:mm p',
  interval: 30,
  minTime: '6',
  maxTime: '6:00pm',
  dynamic: false,
  dropdown: true,
  scrollbar: true
});

});

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
