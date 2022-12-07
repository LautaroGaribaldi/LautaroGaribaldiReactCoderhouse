

const productos = [{id: 1, name: "placa", description: "placa de video", stock:10},
{id: 2, name: "memoria", description: "memoria ram", stock:20},
{id: 3, name: "disco", description: "disco duro", stock:13},
{id: 4, name: "procesador", description: "procesador", stock:4},
{id: 5, name: "fuente", description: "fuente de poder", stock:29},]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(()=>{
            res(productos);
        },2000);
    });
}   