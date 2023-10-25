import PropTypes from "prop-types";

function GeneralStatus({ data }) {
  const getGeneralStatus = () => {
    const sorted = [...data];
    sorted.sort((a, b) => b.status.priority - a.status.priority);
    const icon = sorted[0].status.icon;
    return icon({ width: 110 });
  };
  const getTotalErrors = (data) => {
    const errorCount = data.filter((item) => item.status.isError).length;
    return errorCount > 0
      ? `Partial service outage`
      : "All systems are operational";
  };
  return (
    <div className="general-status">
      {getGeneralStatus()}
      <h1>{getTotalErrors(data)}</h1>
    </div>
  );
}

GeneralStatus.propTypes = {
  data: PropTypes.array,
};

export default GeneralStatus;
