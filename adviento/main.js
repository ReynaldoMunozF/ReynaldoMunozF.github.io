let rafa = document.getElementById("rafa3");
let rey = document.getElementById("rey3");


rey.addEventListener("click", function () {
  let rspt =  prompt(" Nombra uno de los regalos que le dieron los reyes magos al niño Jesus").toUpperCase()
    if (rspt == "MIRRA"){
    location.href = "sorpresaRey.html"
}else {
    prompt("vuelve a intentarlo")
}
});
rafa.addEventListener("click", function () {
let rspt =  prompt(" Nombra uno de los regalos que le dieron los reyes magos al niño Jesus").toUpperCase()
    if (rspt == "INCIENSO"){
    location.href = "sorpresaRafa.html"
}else {
    prompt("vuelve a intentarlo")
}
});