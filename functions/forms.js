(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        const negative = document.getElementsByClassName("toast-container")[0];
        if (form.checkValidity()) {
          console.log('bsSend')
          negative.style.opacity = "100";
          setTimeout(function () {
            window.location.href = '../index.html'; // Cambia la URL de destino al HTML dentro del proyecto
          }, 2000);
        } else {
          negative.style.opacity = "0";
        }
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')
      }, false)
    })
})()

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = new bootstrap.Toast(toastLiveExample);
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}