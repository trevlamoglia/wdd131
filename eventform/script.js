const form = document.getElementById('eventForm');
const typeSelect = document.getElementById('type');
const studentContainer = document.getElementById('studentID');
const studentNumber = document.getElementById('studentNumber');
const accessContainer = document.getElementById('accessCode');
const accessInput = document.getElementById('accessCodeInput');
const output = document.getElementById('output');

function updateNotesField() {
  const value = typeSelect.value;

  if (value === "guest") {
    accessContainer.hidden = false;
    accessInput.required = true;
    studentContainer.hidden = true;
    studentNumber.required = false;
  } else if (value === "student") {
    studentContainer.hidden = false;
    studentNumber.required = true;
    accessContainer.hidden = true;
    accessInput.required = false;
  } else {
    studentContainer.hidden = true;
    accessContainer.hidden = true;
    studentNumber.required = false;
    accessInput.required = false;
  }
}

typeSelect.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  today.setHours(0, 0, 0, 0);
  chosen.setHours(0, 0, 0, 0);
  return chosen <= today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = typeSelect.value;
  const availableDate = form.availableDate.value;
  let note = "";
  if (type === "student" && studentNumber) note = studentNumber.value.trim();
  if (type === "guest" && accessInput) note = accessInput.value.trim();

  if (!type) {
    output.textContent = "Please select type";
    return;
  }
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }
  if (type === "student") {
    if (!/^\d{9}$/.test(note)) {
      return output.textContent = 'Student I# must be 9 digits';
    }
  }

  if (type === 'guest') {
    if (((accessInput.value || '').trim().toUpperCase()) !== 'EVENT131') {
      return output.textContent = 'Access Code is incorrect.';
    }
  }

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Type: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});