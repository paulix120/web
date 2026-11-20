
let likes = 0;

const contador = document.getElementById("contador");
const btnLike = document.getElementById("btnLike");
const historial = document.getElementById("historial");

btnLike.addEventListener("click", function() {
    likes++;

    contador.textContent = likes + " Likes";
    if (likes > 10) {
    contador.style.color = "green";
} else {
    contador.style.color = "black";
}

    const fecha = new Date();
    const fechaHora = fecha.toLocaleString();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${likes}</td>
        <td>${fechaHora}</td>
    `;

    historial.appendChild(fila);
    const btnQuitar = document.getElementById("btnQuitar");
const btnReiniciar = document.getElementById("btnReiniciar");
btnQuitar.addEventListener("click", function() {
    if (likes > 0) {
        likes--;
        contador.textContent = likes + " Likes";
    }
});

btnReiniciar.addEventListener("click", function() {
    contador.style.color = "black";
    likes = 0;
    contador.textContent = likes + " Likes";
    historial.innerHTML = "";
});
});
