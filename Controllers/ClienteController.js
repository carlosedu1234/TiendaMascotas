import { listaClientes } from "../service/service-cliente.js"

console.log(listaClientes);

const personas = document.querySelector("[data-personas]");

const insertarPersona = (nombre, correo,id) => {
    console.log(id);
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
          <button class="simple-button simple-button--delete" type="button" id=${id}>Eliminar</button>
        </li>
      </ul>
    </td>
  `;
    nuevoDato.innerHTML = contenido;

const btn=nuevoDato.querySelector("button");

btn.addEventListener("click", ()=>{
const id=btn.id;
listaClientes.eliminarCliente(id).then((cliente)=>{console.log(cliente)})
.catch(error=>{alert(error.message)})

});

    return nuevoDato;
};




listaClientes.listaCliente()
    .then((data) => {
        data.forEach(({nombre,email,id}) => {
            const nuevoDato = insertarPersona(nombre, email ,id);
            personas.appendChild(nuevoDato);
        });
    })
    .catch((error) => {
        alert("Ocurrió un error" + error);
    });
