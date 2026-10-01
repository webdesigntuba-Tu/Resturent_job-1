// current date/time
// document.addEventListener("DOMContentLoaded", function () {
//   const clock = document.getElementById("dateTime");
//   function showDateTime() {
//     if (clock) clock.textContent = new Date().toLocaleString();
//   }
//   showDateTime();
//   setInterval(showDateTime, 0);
function showRealTime() {
  
    const date = new Date(); 
    const timeString = date.toLocaleTimeString();
    document.getElementById("clock").innerText = timeString;
}
setInterval(showRealTime, 1000);
showRealTime();


  // Login form handling

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login form submitted successfully!");
    });
  }

   // Reservation form handling

  const reservationForm = document.getElementById("reservationForm");
  if (reservationForm) {
    reservationForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("resName").value;
      alert("Reservation confirmed for " + name + "!");
    });
  }

  // reservation Alert
  function reservation(){
    alert("Reserve The Table");
  }
   // Image zoom effect

  if (window.jQuery && document.getElementById("zoomImage")) {
    $("#zoomImage").on("mouseenter", function () {
      $(this).css("transform", "scale(1.5)");
    }).on("mouseleave", function () {
      $(this).css("transform", "scale(1)");
    });
  }
