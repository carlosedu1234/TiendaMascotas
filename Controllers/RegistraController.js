import { listaClientes } from "../service/service-cliente.js";

const registro = document.querySelector("[data-form]");

registro.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    console.log(nombre, email);

    listaClientes.
        registrarCliente(nombre, email).then((respuesta) => {
            window.location.href = "../screens/registro_completado.html"
        })
        .catch((error) => console.log(error));

});