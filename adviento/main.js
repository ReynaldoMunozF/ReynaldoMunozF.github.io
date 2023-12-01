let rafa = document.getElementById("rafa");
let rey = document.getElementById("rey");


rey.addEventListener("click", function () {
  let rspt =  prompt("adivina el nombre del rey mago").toUpperCase()
    if (rspt == "MELCHOR"){
    location.href = "sorpresaRey.html"
}else {
    prompt("vuelve a intentarlo")
}
});
rafa.addEventListener("click", function () {
let rspt =  prompt("adivina el nombre del rey mago").toUpperCase()
    if (rspt == "GASPAR"){
    location.href = "sorpresaRey.html"
}else {
    prompt("vuelve a intentarlo")
}
});