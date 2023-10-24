import PropTypes from "prop-types";
import Tick from "../assets/icons/Tick";
import MinusCircle from "../assets/icons/MinusCircle";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";
import ExclamationCircle from "../assets/icons/ExclamationCircle";
import Clock from "../assets/icons/Clock";

function GeneralStatus({ statuses }) {
  const getGeneralStatus = () => {
    if (statuses.some((item) => item.status === "Outage")) {
      return { icon: <MinusCircle width={110} />, text: "Outage" };
    } else if (statuses.some((item) => item.status === "Partial Outage")) {
      return {
        icon: <ExclamationTriangle width={110} />,
        text: '"Partial Outage"',
      };
    } else if (statuses.some((item) => item.status === "Degraded")) {
      return { icon: <ExclamationCircle width={110} />, text: "Degraded" };
    } else if (statuses.some((item) => item.status === "Maintenance")) {
      return { icon: <Clock width={110} />, text: "Maintenance" };
    } else if (statuses.some((item) => item.status === "No known issues")) {
      return { icon: <Tick width={110} />, text: "No known issues" };
    }
  };
  const getTotalErrors = (statuses) => {
    const errorStatuses = [
      "Outage",
      "Partial Outage",
      "Degraded",
      "Maintenance",
    ];
    const errorCount = statuses.filter((item) =>
      errorStatuses.includes(item.status)
    ).length;
    return errorCount > 0
      ? `${errorCount} Errors found`
      : "All systems are operational";
  };
  return (
    <div className="general-status">
      {getGeneralStatus().icon}
      <h1>{getTotalErrors(statuses)}</h1>
    </div>
  );
}

GeneralStatus.propTypes = {
  statuses: PropTypes.array,
};

export default GeneralStatus;
