// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

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

    // Mostrar la lista actualizada automáticamente
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    lista.innerHTML = "";

    // Iterar sobre el array amigos y agregar cada nombre como <li>
    amigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigo; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    });
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>!`;
}
