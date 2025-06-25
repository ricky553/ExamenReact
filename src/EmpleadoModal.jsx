import Entrada from './Entrada';
import Swal from 'sweetalert2';

const EmpleadoModal = ({show, handleclose, FormData, setformdata, handleSubmit}) => {
    if(!show) return null

    const onchange = (e) => {
        setformdata({...FormData, [e.target.name]: e.target.value})
    }

    return (
        <div className='modal show d-block' tabIndex="-1" role='dialog'>
            <div className='modal-dialog'>
                <form onSubmit={(e) => {
            e.preventDefault();
            if (!formData.nombre || !formData.dni || !formData.direccion || !formData.email) {
              Swal.fire('Error', 'Todos los campos son obligatorios', 'error');
              return;
            }
            handleSubmit();
            handleClose();
          }}
          className="modal-content">
            <div className='modal-header'>
                <h5 className='modal-title'>Agregar Empleado</h5>
                <button type='button' className='btn-close' onClick={handleclose}></button>
            </div>
            <div className='modal-body'>
            <Entrada label="Nombre" name="nombre" type="text" value={formData.nombre} onChange={onChange} required />
            <Entrada label="DNI" name="dni" type="text" value={formData.dni} onChange={onChange} required />
            <Entrada label="Dirección" name="direccion" type="text" value={formData.direccion} onChange={onChange} required />
            <Entrada label="Email" name="email" type="email" value={formData.email} onChange={onChange} required />
            </div>
            <div className='modal-footer'>
                <button className='btn btn-secondary' onClick={handleclose}>Cerrar</button>
                <button type='submit' className='btn btn-primary'>Guardar</button>
            </div>
          </form>
            </div>
        </div>
    )

}

export default EmpleadoModal;