// variables

var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");
let btnSubmit = document.getElementById("btn");
var errorDay = document.getElementById("error-day");
var errorMonth = document.getElementById("error-month");
var errorYear = document.getElementById("error-year");
var date = new Date();
var currentDay = date.getDate();
var currentMonth = date.getMonth() + 1;
var currentYear = date.getFullYear();

// validate input onchange
function dayValidate() {
  let dayLabel = document.getElementById("day-label");
  if (day.value == 0 || day.value > 31) {
    day.classList.add("error-border");
    errorDay.style.display = "block";
    errorDay.innerHTML = "Must be a valid day";
    dayLabel.classList.add("error");
    return false;
  } else if (!day.value) {
    day.classList.add("error-border");
    errorDay.style.display = "block";
    errorDay.innerHTML = "This field is required";
    dayLabel.classList.add("error");
    return false;
  } else {
    day.classList.remove("error-border");
    dayLabel.classList.remove("error");
    errorDay.style.display = "none";
  }
}
day.addEventListener("input", dayValidate);

function monthValidate() {
  let monthLabel = document.getElementById("month-label");
  if (month.value == 0 || month.value > 12) {
    month.classList.add("error-border");
    errorMonth.style.display = "block";
    errorMonth.innerHTML = "Must be a valid month";
    monthLabel.classList.add("error");
    return false;
  } else if (!month.value) {
    month.classList.add("error-border");
    errorMonth.style.display = "block";
    errorMonth.innerHTML = "This field is required";
    monthLabel.classList.add("error");
    return false;
  } else {
    month.classList.remove("error-border");
    monthLabel.classList.remove("error");
    errorMonth.style.display = "none";
  }
}
month.addEventListener("input", monthValidate);

function yearValidate() {
  let yearLabel = document.getElementById("year-label");
  if (year.value == 0 || year.value > currentYear) {
    year.classList.add("error-border");
    errorYear.style.display = "block";
    errorYear.innerHTML = "Must be in the past";
    yearLabel.classList.add("error");
    return false;
  } else if (!year.value) {
    year.classList.add("error-border");
    errorYear.style.display = "block";
    errorYear.innerHTML = "This field is required";
    yearLabel.classList.add("error");
    return false;
  } else {
    year.classList.remove("error-border");
    yearLabel.classList.remove("error");
    errorYear.style.display = "none";
  }
}
year.addEventListener("input", yearValidate);

btnSubmit.addEventListener("click", function () {
  let outputDay = document.getElementById("day-output");
  let outputMonth = document.getElementById("month-output");
  let outputYear = document.getElementById("year-output");
  var dob = new Date(year.value, month.value, day.value);

  let dobDay = dob.getDate();
  let dobMonth = dob.getMonth();
  let dobYear = dob.getFullYear();

  if (
    day.value == 0 ||
    month.value == 0 ||
    year.value == 0 ||
    !day.value ||
    !month.value ||
    !year.value
  ) {
    dayValidate();
    monthValidate();
    yearValidate();
    // validate input
  } else {
    //get years
    var yearAge = currentYear - dobYear;
    // get months
    if (currentMonth >= dobMonth) {
      //get months when current month is greater
      var monthAge = currentMonth - dobMonth;
    } else {
      yearAge--;
      var monthAge = 12 + currentMonth - dobMonth;
    }
    // get date
    if (currentDay >= dobDay) {
      //get days when the current date is greater
      var dateAge = currentDay - dobDay;
    } else {
      monthAge--;
      var dateAge = 31 + currentDay - dobDay;
      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }
    outputDay.innerHTML = dateAge;
    outputMonth.innerHTML = monthAge;
    outputYear.innerHTML = yearAge;
  }
});