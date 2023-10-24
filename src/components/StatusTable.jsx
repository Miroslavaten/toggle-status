import PropTypes from "prop-types";
import Tick from "../assets/icons/Tick";
import ExclamationCircle from "../assets/icons/ExclamationCircle";
import Clock from "../assets/icons/Clock";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";
import MinusCircle from "../assets/icons/MinusCircle";

const StatusTable = ({ statuses }) => {
  const getStatusIcon = (status) => {
    switch (status) {
      case "No known issues":
        return <Tick />;
      case "Maintenance":
        return <Clock />;
      case "Degraded":
        return <ExclamationCircle />;
      case "Partial Outage":
        return <ExclamationTriangle />;
      case "Outage":
        return <MinusCircle />;
    }
  };
  return (
    <div className="status-table">
      <p>Status per service areas</p>
      <ul className="status-table__list">
        {statuses.map((item, index) => (
          <li key={index} className="list__item">
            {getStatusIcon(item.status)}
            <div className="list__item-right">
              <h4 className="list__item-title">{item.title}</h4>
              <p className="list__item-description">{item.status}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

StatusTable.propTypes = {
  statuses: PropTypes.array,
};
export default StatusTable;
