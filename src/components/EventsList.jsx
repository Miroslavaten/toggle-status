function EventsList() {
  return (
    <div className="events">
      <h3 className="events__title">Recent Events</h3>
      <ul className="events__list">
        <li className="events__list-item">
          <p className="list-item__name">
            Shop Pay Installments is not processing payments
          </p>
          <p className="list-item__date">19 окт. 2023 г. at 00:40</p>
          <div className="list-item__right">
            <span className="list-item__updates">4 updates</span>
            <span className="list-item__status">Resolved</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default EventsList;
