let btnPrincipiante = document.getElementById("lvlPrincipiante");

btnPrincipiante.addEventListener("click", function () {
  let nombreJugador = document.getElementById("nombreJugador").value;
  sessionStorage.setItem("nombreJugador", nombreJugador);
  sessionStorage.setItem("nivel", "principiante");
  sessionStorage.setItem("cantidadColores", "4");
  location.href = "./selecction-colors.html";
  
});