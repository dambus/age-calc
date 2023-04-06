import { CountUp } from "countup.js";

const submitButton = document.querySelector(".subButton");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const resultDays = document.querySelector(".app--result-display--days span");
const resultMonths = document.querySelector(
  ".app--result-display--months span"
);
const resultYears = document.querySelector(".app--result-display--years span");
const today = new Date();
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const messageBox = document.querySelector(".message-box");

let dayOk = false;
let monthOk = false;
let yearOk = false;

const validateDay = function () {
  if (isNaN(this.value) || this.value < 1 || this.value > 31) {
    document.getElementById("dayHelp").innerHTML = "Must be a valid day";
    document.querySelector(".dayInputLabel").style.color = "red";
    document.getElementById("day").style.borderColor = "red";
  } else {
    document.getElementById("dayHelp").innerHTML = "";
    document.querySelector(".dayInputLabel").style.color = "gray";
    document.getElementById("day").style.borderColor = "gray";
    dayOk = true;
  }
};

const validateMonth = function () {
  if (
    isNaN(this.value) ||
    this.value < 1 ||
    this.value > 12 ||
    months[this.value - 1] < dayInput.value
  ) {
    document.getElementById("monthlHelp").innerHTML = "Must be a valid month";
    document.querySelector(".monthInputLabel").style.color = "red";
    document.getElementById("month").style.borderColor = "red";
  } else {
    document.getElementById("monthlHelp").innerHTML = "";
    document.querySelector(".monthInputLabel").style.color = "gray";
    document.getElementById("month").style.borderColor = "gray";
    monthOk = true;
  }
};

const validateYear = function () {
  if (isNaN(this.value) || this.value > today.getFullYear()) {
    document.getElementById("yearHelp").innerHTML = "Must be a valid month";
    document.querySelector(".yearInputLabel").style.color = "red";
    document.getElementById("year").style.borderColor = "red";
  } else {
    document.getElementById("yearHelp").innerHTML = "";
    document.querySelector(".yearInputLabel").style.color = "gray";
    document.getElementById("year").style.borderColor = "gray";
    yearOk = true;
  }
};

dayInput.addEventListener("input", validateDay);
monthInput.addEventListener("input", validateMonth);
yearInput.addEventListener("input", validateYear);

const calculateAge = function () {
  resultDays.innerHTML = "--";
  resultMonths.innerHTML = "--";
  resultYears.innerHTML = "--";
  !messageBox.classList.contains("outside")
    ? messageBox.classList.add("outside")
    : messageBox.classList.contains("class");
  messageBox.innerHTML = "";
  let day1 = +dayInput.value;
  let month1 = +monthInput.value;
  let year1 = +yearInput.value;
  // let currentDate = new Date();
  let day2 = today.getDate();
  let month2 = 1 + today.getMonth();
  let year2 = today.getFullYear();

  if (dayOk && monthOk && yearOk) {
    if (day1 > day2) {
      day2 = day2 + months[month2 - 1];
      month2 = month2 - 1;
    }
    if (month1 > month2) {
      month2 = month2 + 12;
      year2 = year2 - 1;
    }
    const daysOld = day2 - day1;
    const monthsOld = month2 - month1;
    const yearsOld = year2 - year1;
    dayOk = false;
    monthOk = false;
    yearOk = false;

    let yearCountUp = new CountUp("myYear", yearsOld, 2000);
    yearCountUp.start();
    let monthCountUp = new CountUp("myMonth", monthsOld, 2000);
    monthCountUp.start();
    let dayCountUp = new CountUp("myDay", daysOld, 2000);
    dayCountUp.start();
  } else {
    messageBox.classList.remove("outside");
    messageBox.innerHTML = "There was some invalid input, please try again.";
    dayInput.value = "";
    monthInput.value = "";
    yearInput.value = "";
    return;
  }
};

submitButton.addEventListener("click", calculateAge);
