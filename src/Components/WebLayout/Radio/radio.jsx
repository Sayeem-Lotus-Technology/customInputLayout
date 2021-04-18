const Radio = (props) => {
    return (
        <div className="customRadio">
            <input onChange={props.changed} name={props.name} value={props.value} type={props.type} />  {props.label ? <label className="text-capitalize">{props.label}</label> : ""}
        </div>
    );
}

export default Radio;