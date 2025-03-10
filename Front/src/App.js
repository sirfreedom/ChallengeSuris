import './Css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {useState,useEffect} from 'react';
import RGrid from './Components/RGrid'
import {ListReservas} from './Components/Helpers'
import ModalNew from './Components/ModalNew';


const GrillaConfiguracion = [
  {
    Tittle: 'Cliente',
    Selector: fila => fila.cliente,
    WidthColumn: '40%',
    Ordenable: true,
    ColumnOrdenable: 'Cliente',
  },
  {
    Tittle: 'Servicio',
    Selector: fila => fila.servicio,
    WidthColumn: '40%',
    Ordenable: true,
    ColumnOrdenable: 'Servicio'
  },
  {
    Tittle: 'Fecha',
    Selector: fila => fila.fecha,
    WidthColumn: '20%',
  },
];

function App() {

  const [Reserva, setReserva] = useState([]);
  const [ShowModalNew, setShowModalNew] = useState(false);

  useEffect(() => 
  {
    ListReservas().then(lReserva => {
      setReserva(lReserva);
    });
    console.log(Reserva);
  }, []);


const GridNew = () => {
  setShowModalNew(true);
  };

 return (
    <>
        <table width="100%" >
          <tr>
            <td>
              <button className="btn-2" onClick={GridNew} >  Nuevo Registro  </button>
            </td>
          </tr>
          <tr>
            <td>

            <RGrid
              key="RGrid"
              Tittle="Suris Code"
              rows={Reserva}
              columns={GrillaConfiguracion}
              ShowDelete={true}
              ShowEdit={false}
              Export={true}
              TotalWidth="80%"
              DeleteId={Id => alert("not implementes id" + Id)}
              EditId={Id => alert("not implementes id" + Id)}
              isLoading={false}
              ConfigurationId="id" //Id de los datos de la grilla
            />
            </td>
          </tr>
          <tr>
            <td>
                <ModalNew show={ShowModalNew} onHide={() => setShowModalNew(false)}  />
            </td>
          </tr>

        </table>


    </>
  );
}

export default App;
