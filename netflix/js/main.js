

function mostrarInfo() {
  var divSinopse = document.querySelector(".hide");
  divSinopse.classList.replace('hide', 'show');
}

function removerInfo() {
  var divSinopse = document.querySelector(".show");
  divSinopse.classList.replace('show', 'hide');
}