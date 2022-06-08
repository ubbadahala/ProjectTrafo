import 'regenerator-runtime'

import '../style/style.css'
import '../style/transformer.png'
import '../style/calculator.png'

import runCalculation from './scriptTrafo.js'

const splash = document.querySelector('.splash')

document.addEventListener('DOMContentLoaded', (e) => {
  setTimeout(() => {
    splash.classList.add('display-none')
    // eslint-disable-next-line no-undef
    Swal.fire({
      text: 'With this site, you can do calculation to find the approximate equivalent circuit parameters referred to the primary side of transformer with ease.',
      icon: 'info',
      showCancelButton: false,
      confirmButtonColor: '#288FB4',
      confirmButtonText: 'Ok, understood.'
    })
  }, 3000)
})

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('trafoData')

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault()
    runCalculation()
  })
})

const delButton = document.getElementById('deleteData')

delButton.addEventListener('click', function () {
  // eslint-disable-next-line no-undef
  Swal.fire({
    title: 'Clear Data?',
    text: 'Are you sure to delete all the input parameters?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#f44336',
    cancelButtonColor: '#288FB4',
    confirmButtonText: 'Yes, delete it',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      document.getElementById('trafoData').reset()
    }
  })
})
