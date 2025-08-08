// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let contador = 0;

const agregarAmigo = () => {
    
    const amigo = document.getElementById("amigo").value;
    if (amigo === "") {
        if (contador == 0) {
            alert("Bienvenido al juego del amigo Secreto. Por favor, ingrese el nombre de su primer amigo.");
            contador++;
        } else if (contador > 0) {
            alert("Por favor, ingrese un nombre de amigo VALIDO.");
        }
    } else {
        if (!amigos.includes(amigo)) {
            amigos.push(amigo);
            document.getElementById("amigo").value = "";
            console.log(amigos);
        } else {
            alert("Este amigo ya está en la lista. Por favor, ingrese un nombre diferente.");
            document.getElementById("amigo").value = "";
        }
    }
    recorrerAmigos();
    mostrarResultado();
};

const recorrerAmigos = () => {
    const recorrerListaAmigos = document.getElementById("listaAmigos");
    recorrerListaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        recorrerListaAmigos.appendChild(li);
    }
};

const sortearAmigo = () => {
    if ( amigos.length  === 0) {
        alert("No hay amigos para escoger. Por favor, agregue al menos un amigo.");
    } else if (amigos.length === 1) {
        alert("Solo hay un amigo en la lista. No se puede escoger un amigo secreto.");
    } else {
        let aleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[aleatorio];
        alert(`Tu amigo secreto es: ${amigoSecreto}`);
    }
};

const mostrarResultado = () => {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.textContent = "No hay amigos en la lista.";
    } else {
        resultado.textContent = `Total de amigos: ${amigos.length}`;
    }
};


agregarAmigo();
