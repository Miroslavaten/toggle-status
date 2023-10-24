import AllStatuses from "./components/AllStatuses";
import EventsList from "./components/EventsList";
import GeneralStatus from "./components/GeneralStatus";
import Navbar from "./components/Navbar";
import StatusTable from "./components/StatusTable";

function App() {
  const statuses = [
    { title: "WEB Application", status: "Outage" },
    { title: "API", status: "No known issues" },
    { title: "Third party services", status: "No known issues" },
  ];
  return (
    <div className="container">
      <Navbar />
      <GeneralStatus statuses={statuses} />
      <AllStatuses />
      <StatusTable statuses={statuses} />
      <p className="status-table__note">
        Some issues affecting a small percentage of stores may not be reflected
        here.
      </p>
      <EventsList />
    </div>
  );
}

export default App;
