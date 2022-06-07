import { runCalculation } from "./scriptTrafo.js"

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none')
    Swal.fire({
      text: "With this site, you can do calculation to find the approximate equivalent circuit parameters referred to the primary side of transformer with ease.",
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#288FB4',
      confirmButtonText: 'Ok, understood.',
    })
  }, 3000)
})

document.addEventListener("DOMContentLoaded", function() {

  const submitForm = document.getElementById("trafoData");

  submitForm.addEventListener("submit", function(event) {
      event.preventDefault();
      runCalculation();
  });
});