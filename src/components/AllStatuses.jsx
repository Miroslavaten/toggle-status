import Clock from "../assets/icons/Clock";
import ExclamationCircle from "../assets/icons/ExclamationCircle";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";
import MinusCircle from "../assets/icons/MinusCircle";
import Tick from "../assets/icons/Tick";

function AllStatuses() {
  const statusItems = [
    { icon: <Tick />, text: "No known issues" },
    { icon: <Clock />, text: "Maintenance" },
    { icon: <ExclamationCircle />, text: "Degraded" },
    { icon: <ExclamationTriangle />, text: "Partial Outage" },
    { icon: <MinusCircle />, text: "Outage" },
  ];
  console.log(statusItems);
  return (
    <div className="all-statuses">
      <ul className="status-list">
        {statusItems.map((item, index) => (
          <li key={index} className="status-list__item">
            {item.icon}
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStatuses;
