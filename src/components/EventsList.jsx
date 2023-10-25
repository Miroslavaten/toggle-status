import PropTypes from "prop-types";
import { eventStatuses } from "../helpers/constants";

function EventsList({ recentEvents }) {
  return (
    <div className="events">
      <h3 className="events__title">Recent Events</h3>
      <ul className="events__list">
        {recentEvents.length ? (
          recentEvents.map((item, index) => (
            <li key={index} className="events__list-item">
              <p className="list-item__name">{item.title}</p>
              <p className="list-item__date">{item.date}</p>
              <div className="list-item__right">
                <span
                  className={`list-item__status-${
                    item.status === eventStatuses.resolved ? "green" : "red"
                  }`}
                >
                  {item.status}
                </span>
              </div>
            </li>
          ))
        ) : (
          <li className="events__list-item">
            <p className="list-item__name">No recent event</p>
          </li>
        )}
      </ul>
    </div>
  );
}

EventsList.propTypes = {
  recentEvents: PropTypes.array,
};

export default EventsList;
