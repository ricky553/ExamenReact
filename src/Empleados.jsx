import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import EmpleadoModal from '../components/EmpleadoModal';

const Empleados = () =>{
    const [empleados, setEmpleados] = useState([])
    const [showmodal, setshowmodal] = useState(false)
    [FormData, setformdata] = useState({nombre: '', dni: '', direccion: '', email: '',})
    
    const API_URL = 'https://674c84c054e1fca9290cd05f.mockapi.io/api/examen/empleado'

    const fetchEmpleados = async () => {
    const res = await axios.get(API_URL);
    setEmpleados(res.data);
  };

  const handleSubmit = async () => {
    try {
      await axios.post(API_URL, formData);
      Swal.fire('Éxito', 'Empleado registrado correctamente', 'success');
      setFormData({ nombre: '', dni: '', direccion: '', email: '' });
      fetchEmpleados();
    } catch {
      Swal.fire('Error', 'No se pudo registrar el empleado', 'error');
    }
  };

  useEffect(() => {
    fetchEmpleados();
  }, [])

  return(
    <div className='container mt-5'>
        <h2 className='mb-4'>Listado de Empleados</h2>
        <button className="btn btn-success mb-3" onClick={() => setShowModal(true)}>
        <i className="fas fa-plus"></i> Agregar Empleado
      </button>

      <table className='table table-bordered'>
        <thead className='table-dark'>
            <tr>
                <th>Nombre</th>
                <th>DNI</th>
                <th>Direccion</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
             {empleados.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.nombre}</td>
              <td>{emp.dni}</td>
              <td>{emp.direccion}</td>
              <td>{emp.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <EmpleadoModal
      show={showmodal}
      handleclose={() => setshowmodal(falase)}
      formData={formData}
      setFormData={setformdata}
      handleSubmit={handleSubmit}
      />
    </div>
  )

}

export default Empleados;