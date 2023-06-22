import { listaClientes } from "../service/service-cliente.js"

const editarUsuario = () => {

    const url = new URL(window.location);
    const id = url.searchParams.get("id")
    if (id == null) {
        window.location.href = "/screens/error.html"
    }
    listaClientes.actualizarCliente(id).then((datos) => {
        console.log(datos.nombre);
        const nombre = datos.nombre;
        const email = datos.email;

        document.querySelector("[data-nombre]").value = nombre;
        document.querySelector("[data-email]").value = email;

    })

}

editarUsuario();
const docActualizar = document.querySelector("[data-form]");

docActualizar.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;

    console.log(nombre);
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    listaClientes.remplazarClientes(nombre, email, id).then(() =>
        window.location.href = "/screens/edicion_concluida.html"
    )

        .catch((error) => { console.log(error) });

});
