import "./Spinner.css";

function Spinner(props) {
    return (
        <div className="spinner-container">
            <div className={props.spinnerClassName}></div>
        </div>
    )
}

export default Spinner;