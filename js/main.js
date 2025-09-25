// variables principales del código, para seleccionar cada elemento a cambiar.
const input = document.querySelector("input");
const button = document.querySelector("button");
const error = document.querySelector(".bg-danger");
const list = document.querySelector("ul");

// variable LET para luego poder modificarla al borrar la lista con la imagen.png.
let direcciones = JSON.parse(localStorage.getItem("direcciones")) || [];

// Al iniciar la página, recarga las direcciones anterior.
window.addEventListener("DOMContentLoaded", () => {
    direcciones.forEach(direccion => addDirection(direccion));
});

// Eventos para input y boton, interacción de usuario.
input.addEventListener("keydown", hide);
button.addEventListener("click", clickButton);

// Función para cuando el usuario no escribe nada, mostrarle la alerta.
function clickButton() {
    if (input.value === "") {
        error.classList.remove("d-none");
        return;
    }

// guardar en el array y en localstorage el valor que el usuario puso en input, para luego pushearlo.
    const direccion = input.value;
    direcciones.push(direccion);
    localStorage.setItem("direcciones", JSON.stringify(direcciones));
    addDirection(direccion);
    input.value = "";
}

// funcionalidad de la lista, agregar texto, imagen(boton) y guardar estos valores en la lista visible.
function addDirection(direccion) {
    const li = document.createElement("li");
    const returnedResponse = document.createElement("span");
    const trashButton = document.createElement("img");

    trashButton.src = "./images/papelera.png";
    trashButton.onclick = () => eliminarDireccion(direccion, li);

    returnedResponse.textContent = direccion;
    li.appendChild(returnedResponse);
    li.appendChild(trashButton);
    list.appendChild(li);
}

// funcion para eliminar el elemento de la lista (a gusto del usuario) y, que también, se elimine el array del localStorage.
function eliminarDireccion(direccion, li) {
    direcciones = direcciones.filter(dir => dir !== direccion);
    localStorage.setItem("direcciones", JSON.stringify(direcciones));
    li.remove();
}

//funcion para esconder el error al no escribir algo, solo luego de que la persona ponga minimo un valor en el input.
function hide() {
    error.classList.add("d-none");
}
