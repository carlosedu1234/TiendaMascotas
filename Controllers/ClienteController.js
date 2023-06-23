import { listaClientes } from "../service/service-cliente.js";

const personas = document.querySelector("[data-personas]");

const insertarPersona = (nombre, correo, id) => {
  const nuevoDato = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>${nombre}</td>
    <td>${correo}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id=${id}>Eliminar</button>
        </li>
      </ul>
    </td>
  `;
  nuevoDato.innerHTML = contenido;

  const btn = nuevoDato.querySelector("button");

  btn.addEventListener("click", async () => {
    const id = btn.id;
    try {
      const cliente = await listaClientes.eliminarCliente(id);
      console.log(cliente);
    } catch (error) {
      alert(error.message);
    }
  });

  return nuevoDato;
};

const cargarClientes = async () => {
  try {
    const data = await listaClientes.listaCliente();
    data.forEach(({ nombre, email, id }) => {
      const nuevoDato = insertarPersona(nombre, email, id);
      personas.appendChild(nuevoDato);
    });
  } catch (error) {
    alert("Ocurrió un error: " + error);
  }
};

cargarClientes();
