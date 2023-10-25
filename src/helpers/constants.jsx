import Clock from "../assets/icons/Clock";
import ExclamationCircle from "../assets/icons/ExclamationCircle";
import ExclamationTriangle from "../assets/icons/ExclamationTriangle";
import MinusCircle from "../assets/icons/MinusCircle";
import Tick from "../assets/icons/Tick";

export const statuses = {
  noIssues: {
    icon: (props) => <Tick {...props} />,
    text: "No known issues",
    isError: false,
    priority: 0,
  },
  maintenance: {
    icon: (props) => <Clock {...props} />,
    text: "Maintenance",
    isError: true,
    priority: 1,
  },
  degraded: {
    icon: (props) => <ExclamationCircle {...props} />,
    text: "Degraded",
    isError: true,
    priority: 2,
  },
  partialOutage: {
    icon: (props) => <ExclamationTriangle {...props} />,
    text: "Partial Outage",
    isError: true,
    priority: 3,
  },
  outage: {
    icon: (props) => <MinusCircle {...props} />,
    text: "Outage",
    isError: true,
    priority: 4,
  },
};

export const statusItems = Object.values(statuses);
