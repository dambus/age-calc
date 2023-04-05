const submitButton = document.querySelector(".subButton");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const today = new Date();

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
  console.log(this.value);
  if (isNaN(this.value) || this.value < 1 || this.value > 12) {
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
  // let thisYear = new Date().getFullYear();
  console.log(this.value);
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
  let day1 = +document.getElementById("day").value;
  let month1 = +document.getElementById("month").value;
  let year1 = +document.getElementById("year").value;
  let currentDate = new Date();
  let day2 = currentDate.getDate();
  let month2 = 1 + currentDate.getMonth();
  let year2 = currentDate.getFullYear();
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // const checkDay = function (day) {
  //   if (isNaN(day) || day < 1 || day > 31) {
  //     document.getElementById("dayHelp").innerHTML = "Must be a valid day";
  //     document.querySelector(".dayInputLabel").style.color = "red";
  //     document.getElementById("day").style.borderColor = "red";
  //   } else {
  //     dayOk = true;
  //   }
  // };
  // const checkMonth = function (month) {};
  // const checkYear = function (year) {
  //   if (isNaN(year) || year > year2) {
  //     document.getElementById("yearhHelp").innerHTML = "Must be a valid year";
  //     document.querySelector(".yearInputLabel").style.color = "red";
  //     document.getElementById("year").style.borderColor = "red";
  //   } else {
  //     yearOk = true;
  //   }
  // };

  // checkDay(day1);
  // checkMonth(month1);
  // checkYear(year1);

  console.log(dayOk, monthOk, yearOk);

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

    document.querySelector(".app--result-display--years span").innerHTML =
      yearsOld;
    document.querySelector(".app--result-display--months span").innerHTML =
      monthsOld;
    document.querySelector(".app--result-display--days span").innerHTML =
      daysOld;
  } else {
    return;
  }
};

submitButton.addEventListener("click", calculateAge);
