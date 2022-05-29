const ReadOp = (props) => (
    <>
        {props.type === "read more" && <span >...</span>}
        <span className="read-op" onClick={props.onReadOpClick} >{props.type}</span>
    </>
);

export default ReadOp;