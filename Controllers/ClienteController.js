import { listaClientes } from "../service/service-cliente.js"


const personas = document.querySelector("[data-personas]");

const insertarPersona = (nombre, correo) => {
    const nuevoDato = document.createElement("tr");
    const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${correo}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button">Eliminar</button>
        </li>
      </ul>
    </td>
  `;
    nuevoDato.innerHTML = contenido;
    return nuevoDato;
};

listaClientes.listaCliente()
    .then((data) => {
        data.forEach((element) => {
            const nuevoDato = insertarPersona(element.nombre, element.email);
            personas.appendChild(nuevoDato);
        });
    })
    .catch((error) => {
        alert("Ocurrió un error" + error);
    });
