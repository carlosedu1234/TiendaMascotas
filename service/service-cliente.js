const listaCliente = async () => {
    try {
      const response = await fetch("http://localhost:3000/perfil");
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener la lista de clientes");
    }
  };
  
  const registrarCliente = async (nombre, email) => {
    try {
      const response = await fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
          id: uuid.v4(),
        }),
      });
      return response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Error al registrar el cliente");
    }
  };
  
  const eliminarCliente = async (id) => {
    try {
      await fetch(`http://localhost:3000/perfil/${id}`, { method: "DELETE" });
    } catch (error) {
      console.error(error);
      throw new Error("Error al eliminar el cliente");
    }
  };
  
  const actualizarCliente = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/perfil/${id}`);
      return await response.json();
    } catch (error) {
      console.error(error);
      throw new Error("Error al actualizar el cliente");
    }
  };
  
  const remplazarClientes = async (nombre, email, id) => {
    try {
      await fetch(`http://localhost:3000/perfil/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          nombre,
          email,
        }),
      });
    } catch (error) {
      console.error(error);
      throw new Error("Error al reemplazar los datos del cliente");
    }
  };
  
  export const listaClientes = {
    listaCliente,
    registrarCliente,
    eliminarCliente,
    actualizarCliente,
    remplazarClientes,
  };
  