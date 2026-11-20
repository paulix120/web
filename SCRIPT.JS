
let likes = 0;

const contador = document.getElementById("contador");
const btnLike = document.getElementById("btnLike");
const historial = document.getElementById("historial");

btnLike.addEventListener("click", function() {
    likes++;

    contador.textContent = likes + " Likes";

    const fecha = new Date();
    const fechaHora = fecha.toLocaleString();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${likes}</td>
        <td>${fechaHora}</td>
    `;

    historial.appendChild(fila);
});
