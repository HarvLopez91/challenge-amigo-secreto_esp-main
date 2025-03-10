// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputNombre = document.getElementById("amigo").value.trim();

    // Validar que el campo no esté vacío
    if (inputNombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(inputNombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Mostrar la lista actualizada en consola (puedes mostrarla en la página si lo deseas)
    console.log("Lista de amigos:", amigos);
}