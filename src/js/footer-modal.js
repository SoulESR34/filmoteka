// Obtén el elemento del pie de página
var footer = document.getElementById('footer');

// Obtén el modal
var modal = document.getElementById('myModal');

// Obtén el elemento de cierre del modal
var closeModal = document.getElementsByClassName('close')[0];

// Agrega un evento click al pie de página para mostrar el modal
footer.onclick = function () {
  // Muestra el modal
  modal.style.display = 'block';
};

// Cierra el modal cuando se hace clic en el botón de cierre
closeModal.onclick = function () {
  modal.style.display = 'none';
};

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
