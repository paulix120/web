
let likes = 0;

const contador = document.getElementById("contador");
const btnLike = document.getElementById("btnLike");

btnLike.addEventListener("click", function() {
    likes++;

    contador.textContent = likes + " Likes";
});
