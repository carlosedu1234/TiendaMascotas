import { listaClientes } from "../service/service-cliente.js";

const editarUsuario = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  if (id == null) {
    window.location.href = "/screens/error.html";
  }
  
  try {
    const datos = await listaClientes.actualizarCliente(id);
    console.log(datos.nombre);
    const nombre = datos.nombre;
    const email = datos.email;
    
    document.querySelector("[data-nombre]").value = nombre;
    document.querySelector("[data-email]").value = email;
  } catch (error) {
    console.log(error);
  }
};

editarUsuario();

const docActualizar = document.querySelector("[data-form]");

docActualizar.addEventListener("submit", async (evento) => {
  evento.preventDefault();
  
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  
  console.log(nombre);
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  try {
    await listaClientes.remplazarClientes(nombre, email, id);
    window.location.href = "/screens/edicion_concluida.html";
  } catch (error) {
    console.log(error);
  }
});
