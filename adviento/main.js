let rafa = document.getElementById("rafa2");
let rey = document.getElementById("rey2");


rey.addEventListener("click", function () {
  let rspt =  prompt("completa el villancico ... CAMPANA SOBRE CAMPANA Y SOBRE CAMPANA .X.X.X.X ").toUpperCase()
    if (rspt == "UNA"){
    location.href = "sorpresaRey.html"
}else {
    prompt("vuelve a intentarlo")
}
});
rafa.addEventListener("click", function () {
let rspt =  prompt("completa el villancico ... LA VIRGEN SE ESTA PEINANDO, SOBRE CORTINA Y CORTINA SUS CABELLOS SON DE  .X.X.X.X ").toUpperCase()
    if (rspt == "ORO"){
    location.href = "sorpresaRafa.html"
}else {
    prompt("vuelve a intentarlo")
}
});