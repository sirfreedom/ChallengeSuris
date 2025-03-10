


  export const InsertReserva = async (idcliente, idservicio, fecha) => {
    const url = "http://sircode.somee.com/api/Reserva";
    let datainsert = {"idcliente": idcliente,"idservicio": idservicio, "fecha": fecha };
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: 
            {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(datainsert)
        });
        console.log(response);
        const result = await response.json();
        console.log('Datos enviados:', result);
    } catch (error) {
        console.error('Error:', error);
    }
  };


  export const ListReservas = async () => {
    const url = 'http://sircode.somee.com/api/Reserva';
    let data = [];
    let res;
    try{
    res = await fetch(url);
    data = await res.json().catch(err => console.log(err));
   }
    catch(ex){
      console.log(ex);
    }
    return data.reservas;
  };


  export const ListClientes = async () => {
    const url = 'http://sircode.somee.com/api/Cliente';
    let data = [];
    let res;
    try{
    res = await fetch(url);
    data = await res.json().catch(err => console.log(err));
   }
    catch(ex){
      console.log(ex);
    }
    return data.clientes;
  };


  export const ListServicios = async () => {
    const url = 'http://sircode.somee.com/api/Servicio';
    let data = [];
    let res;
    try{
    res = await fetch(url);
    data = await res.json().catch(err => console.log(err));
   }
    catch(ex){
      console.log(ex);
    }
    return data.servicios;
  };