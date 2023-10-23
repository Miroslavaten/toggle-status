import Clock from "../assets/icons/Clock";
import ExclamationCircle from "../assets/icons/ExclamationCircle";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";
import MinusCircle from "../assets/icons/MinusCircle";
import Tick from "../assets/icons/Tick";

function AllStatuses() {
  return (
    <div className="all-statuses">
      <ul className="status-list">
        <li className="status-list__item">
          <Tick />
          <p>No known issues</p>
        </li>
        <li className="status-list__item">
          <Clock />
          <p>Maintenance</p>
        </li>
        <li className="status-list__item">
          <ExclamationCircle />
          <p>Degraded</p>
        </li>
        <li className="status-list__item">
          <ExclamationTriangle />
          <p>Partial Outage</p>
        </li>
        <li className="status-list__item">
          <MinusCircle />
          <p>Outage</p>
        </li>
      </ul>
    </div>
  );
}

export default AllStatuses;
