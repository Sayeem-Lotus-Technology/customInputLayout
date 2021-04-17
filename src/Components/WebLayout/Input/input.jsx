import "./input.css"

const Input = ({ title, type, id, value, setValue, options }) => {
    if (type === "select") {
        return (
            <div className="customSelectInput">
                <select value={value} onChange={(e) => setValue(e.target.value)} className="form-select" aria-label="Default select example">
                    {options ? options.map((op) => (
                        <option key={op} value={op}>{op}</option>
                    )) : ""}
                </select>
            </div>
        );
    }
    if (type === "radio" || type === "checkbox") {
        return (
            <div className="customCheckOrRadio">
                <input onChange={(e) => setValue(e.target.value)} value={title} type={type} id={id} />  {title ? <label className="text-capitalize" htmlFor={id}>{title}</label> : ""}
            </div>
        );
    }
    return (
        <div className="customInput">
            <input onChange={(e) => setValue(e.target.value)} value={value} type={type} id={id} /> <br />
            {title ? <label className="text-capitalize" htmlFor={id}>{title}</label> : ""}
        </div>
    );


}
export default Input;