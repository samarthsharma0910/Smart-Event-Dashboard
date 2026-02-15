let events = [];
const eventList = document.getElementById("eventList");
function renderEvents() {
  eventList.innerHTML = "";
  if (events.length === 0) {
    eventList.innerHTML = `<p class="empty-text" style="text-align:center; color:#888; margin-top:20px;">
      No events yet. Your schedule is clear!</p>`;
    return;
  }
  events.forEach((event, index) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event";
    const dateObj = new Date(event.date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    const formattedDate = dateObj.toLocaleDateString(undefined, options);

    eventCard.innerHTML = `
      <button class="delete-btn" onclick="deleteEvent(${index})">×</button>
      <h3>${event.title}</h3>
      <span class="event-date">📅 ${formattedDate}</span>
      <div class="badge">${event.category}</div>
      <p style="margin-top:10px;">${event.description}</p>
    `;

    eventList.appendChild(eventCard);
  });
}

function addEvent() {
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");
  const categoryInput = document.getElementById("category");
  const descInput = document.getElementById("description");

  if (!titleInput.value || !dateInput.value) {
    alert("Please provide at least a Title and Date.");
    return;
  }

  const newEvent = {
    title: titleInput.value,
    date: dateInput.value, 
    category: categoryInput.value,
    description: descInput.value
  };

  events.push(newEvent);
  titleInput.value = "";
  dateInput.value = "";
  descInput.value = "";

  renderEvents();
}
function addSample(){
  

}
function clearAll() {
  if (events.length === 0) return;
  
  if (confirm("Are you sure you want to delete all events?")) {
    events = [];
    renderEvents();
  }
}


function deleteEvent(index) {
  events.splice(index, 1);
  renderEvents();
}

renderEvents();