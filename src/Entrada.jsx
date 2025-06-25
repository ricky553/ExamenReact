const Entrada = ({label, type, value, onchange, name, required}) => (
    <div className="mb-3">
        <label className="form-label">{label}</label>
        <input type="{type}" 
               className="form-control"
               value={value}
               onchange = {onchange}
               name="{name}"
               required={required}
        />
    </div>

);

export default Entrada;