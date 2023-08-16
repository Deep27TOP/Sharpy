function processing(stay) {
  stay.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  console.log("Name ", name);
  console.log("Email:", email);
  console.log("Phone Number:", phone);
  console.log("Date:", date);
  console.log("Time:", time);

 // let localName = document.getElementById("name").value;

  localStorage.setItem("user-name", name);
  localStorage.setItem("user-email", email);
  localStorage.setItem('user-number', phone);
  localStorage.setItem('date-set', date);
  localStorage.setItem('time-set', time);

  console.log(localStorage.getItem('user-name'))
}

let submitted = document.getElementById("format");

submitted.addEventListener("submit", processing);
