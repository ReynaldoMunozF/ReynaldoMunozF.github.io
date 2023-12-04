let rafa = document.getElementById("rafa4");
let rey = document.getElementById("rey4");


rey.addEventListener("click", function () {
  let rspt =  prompt(" nombra uno de los renos de santa claus").toUpperCase()
    if (rspt == "COMETA"){
    location.href = "sorpresaRey.html"
}else {
    prompt("vuelve a intentarlo")
}
});
rafa.addEventListener("click", function () {
let rspt =  prompt(" nombra uno de los renos de santa claus").toUpperCase()
    if (rspt == "CUPIDO"){
    location.href = "sorpresaRafa.html"
}else {
    prompt("vuelve a intentarlo")
}
});