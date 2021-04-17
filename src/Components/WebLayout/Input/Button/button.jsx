import "./button.css"

const Button = ({ title, color, }) => {

    return (
        <div className="customButton">
            <button className={"text-capitalize btn-" + color}>{title} </button>
        </div>
    );


}
export default Button;