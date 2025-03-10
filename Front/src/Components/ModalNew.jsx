import React, {useState,useEffect,} from 'react'
import {Modal, Button } from 'react-bootstrap/'
import { ListClientes } from './Helpers';
import { ListServicios } from './Helpers';
import { InsertReserva } from './Helpers';
import "react-widgets/styles.css";
import DropdownList from "react-widgets/DropdownList";
import DatePicker from "react-widgets/DatePicker";


function ModalNew(props) {

  const [Clientes, setCliente] = useState([]);
  const [Servicios, setServicio] = useState([]);
  const [Fecha, setFecha] = useState();

  const [ServicioId, setServicioId] = useState(0);
  const [ClienteId, setClienteId] = useState(0);

  useEffect(() => 
  {
    ListClientes().then(lCliente => {
      setCliente(lCliente);
    });
    console.log(Clientes);

    ListServicios().then(lServicio => {
      setServicio(lServicio);
    });
   
  }, []);

  const Save = () => {
  InsertReserva(ClienteId,ServicioId,'01/10/2011');
  };




      return (
        <Modal show={props.show} aria-labelledby="contained-modal-title-vcenter1">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter1"> Nuevo Registro </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
    
          <table className="Table" width="100%" align='center'>
            <thead>
              <tr>
                <td>
                  Ingrese valores 
                </td>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td className="TableCell" align='Center' >
                Cliente : 
                <DropdownList dataKey='id' textField='descripcion' data={Clientes} defaultValue={1} onChange={value => setClienteId(value)} />
              </td>
            </tr>
            <tr>
              <td className="TableCell">
                Servicio: 
                <DropdownList dataKey='id' textField='descripcion' data={Servicios} defaultValue={1} onChange={value => setServicioId(value)} />
              </td>
            </tr>
            <tr>
              <td className='TableCell'>
                Fecha 
                <DatePicker key="txtFecha" id="txtFecha" defaultValue={new Date()} onChange={value => setFecha(value)} placeholder="dd/mm/yyyy" valueEditFormat={{ dateStyle: "short" }}
    valueDisplayFormat={{ dateStyle: "medium" }} />
              </td>
            </tr>
            <tr>
              <td>
                  <Button onClick={Save}>Save</Button>
              </td>
            </tr>
            </tbody>
            <tfoot>
              <tr>
                 <td>
                </td>
              </tr>
            </tfoot>
          </table>
    
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
export default ModalNew;
    