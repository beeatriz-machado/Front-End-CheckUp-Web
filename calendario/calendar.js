const daysElement = document.getElementById("days");
const monthYearElement = document.getElementById("month-year");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentDate = new Date();
const today = new Date();

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Update month and year
  monthYearElement.textContent = currentDate.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // Calculate first and last day of the month
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

  // Calculate last day of the previous month
  const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

  daysElement.innerHTML = "";

  // Add days from previous month
  for (let i = firstDayOfMonth; i > 0; i--) {
    const day = document.createElement("div");
    day.classList.add("day", "inactive");
    day.textContent = lastDateOfPrevMonth - i + 1;
    daysElement.appendChild(day);
  }

  // Add days of the current month
  for (let i = 1; i <= lastDateOfMonth; i++) {
    const day = document.createElement("div");
    day.classList.add("day");

    // Highlight today
    if (
      year === today.getFullYear() &&
      month === today.getMonth() &&
      i === today.getDate()
    ) {
      day.classList.add("today");
    }

    day.textContent = i;
    daysElement.appendChild(day);
  }
}

// Navigate months
prevButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

// Initial render
renderCalendar();
