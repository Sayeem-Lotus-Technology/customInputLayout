import "./input.css"

const Input = (props) => {
    let inputElement;

    switch (props.type) {
        case "select":
            inputElement = (
                <div className="customSelectInput">
                    <select value={props.value} {...props} onChange={props.changed} className="form-select" aria-label="Default select example">
                        {props.options ? props.options.map((op) => (
                            <option key={op} value={op}>{op}</option>
                        )) : ""}
                    </select>
                </div>
            );
            break;
        case "radio":
            inputElement = (
                <div className="customCheckOrRadio">
                    <input onChange={props.changed} value={props.value} type={props.type} />  {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
                </div>
            );
            break;
        case "checkbox":
            inputElement = (
                <div className="customCheckOrRadio">
                    <input onChange={props.changed} value={props.value} type={props.type} /> {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
                </div>

            );
            break;
        default:
            inputElement = (
                <div className="customInput">
                    {props.label ? <label className="text-capitalize"> {props.label} </label> : ""}
                    <input onChange={props.changed} value={props.value} type={props.type}
                    />
                </div>
            );
    }

    return (
        inputElement
    );


}
export default Input;