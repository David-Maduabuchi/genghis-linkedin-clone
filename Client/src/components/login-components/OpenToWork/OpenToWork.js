import "./openToWork.scss";
const OpenToWork = (props) => {
  return (
    <div className="open-to-work-container">
      <div className="open-lhs">
        <h3>{props.header}</h3>
        <p>
        {props.description}
        </p>
      </div>
      <div className="open-rhs">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default OpenToWork;
