import "./button.css"

const Button = (props) => {

    return (
        <div className="customButton">
            <button className={"text-capitalize btn-" + props.color}>{props.title} </button>
        </div>
    );


}
export default Button;