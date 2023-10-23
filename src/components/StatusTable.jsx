import Tick from "../assets/icons/Tick";

const StatusTable = () => {
  return (
    <div className="status-table">
      <p>Status per service areas</p>
      <ul className="status-table__list">
        <li className="list__item">
          <Tick />
          <div className="list__item-right">
            <h4 className="list__item-title">WEB Application</h4>
            <p className="list__item-description">No known issues</p>
          </div>
        </li>
        <li className="list__item">
          <Tick />
          <div className="list__item-right">
            <h4 className="list__item-title"> API</h4>
            <p className="list__item-description">No known issues</p>
          </div>
        </li>
        <li className="list__item">
          {" "}
          <Tick />
          <div className="list__item-right">
            <h4 className="list__item-title">Third party services</h4>
            <p className="list__item-description">No known issues</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StatusTable;
