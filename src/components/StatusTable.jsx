import PropTypes from "prop-types";

const StatusTable = ({ data }) => {
  return (
    <div className="status-table">
      <p>Status per service areas</p>
      <ul className="status-table__list">
        {data.map((item, index) => (
          <li key={index} className="list__item">
            {item.status.icon()}
            <div className="list__item-right">
              <h4 className="list__item-title">{item.title}</h4>
              <p className="list__item-description">{item.status.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

StatusTable.propTypes = {
  data: PropTypes.array,
};
export default StatusTable;
