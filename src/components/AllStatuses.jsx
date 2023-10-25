import { statusItems } from "../helpers/constants";

function AllStatuses() {
  return (
    <div className="all-statuses">
      <ul className="status-list">
        {statusItems.map((item, index) => (
          <li key={index} className="status-list__item">
            {item.icon()}
            <p>{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllStatuses;
