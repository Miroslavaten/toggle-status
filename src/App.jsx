import AllStatuses from "./components/AllStatuses";
import EventsList from "./components/EventsList";
import GeneralStatus from "./components/GeneralStatus";
import Navbar from "./components/Navbar";
import StatusTable from "./components/StatusTable";
import { statuses, eventStatuses } from "./helpers/constants";

function App() {
  const data = [
    { title: "WEB Application", status: statuses.outage },
    { title: "API", status: statuses.noIssues },
    { title: "Third party services", status: statuses.noIssues },
  ];

  const recentEvents = [
    {
      title: "Shop Pay Installments is not processing payments",
      date: "19 окт. 2023 г. at 00:40",
      status: eventStatuses.onGoing,
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <GeneralStatus data={data} />
      <AllStatuses />
      <StatusTable data={data} />
      <p className="status-table__note">
        Some issues affecting a small percentage of stores may not be reflected
        here.
      </p>
      <EventsList recentEvents={recentEvents} />
    </div>
  );
}

export default App;
