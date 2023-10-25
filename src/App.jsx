import AllStatuses from "./components/AllStatuses";
import EventsList from "./components/EventsList";
import GeneralStatus from "./components/GeneralStatus";
import Navbar from "./components/Navbar";
import StatusTable from "./components/StatusTable";
import { statuses } from "./helpers/constants";

function App() {
  const data = [
    { title: "WEB Application", status: statuses.outage },
    { title: "API", status: statuses.maintenance },
    { title: "Third party services", status: statuses.degraded },
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
      <EventsList />
    </div>
  );
}

export default App;
