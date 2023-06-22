const listaCliente = () => fetch("http://localhost:3000/perfil").then((response) => response.json());


const registrarCliente = (nombre,email) =>  {return fetch("http://localhost:3000/perfil",
    {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify({
            nombre,
            email,
            id: uuid.v4()
        })

    }
)
}

const eliminarCliente = (id) => {
    
    return fetch(`http://localhost:3000/perfil/${id}`, {method : "DELETE"})}

export const listaClientes = {
    listaCliente,
    registrarCliente,
    eliminarCliente
    
};