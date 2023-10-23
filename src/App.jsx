import AllStatuses from "./components/AllStatuses";
import EventsList from "./components/EventsList";
import GeneralStatus from "./components/GeneralStatus";
import Navbar from "./components/Navbar";
import StatusTable from "./components/StatusTable";

function App() {
  return (
    <div className="container">
      <Navbar />
      <GeneralStatus />
      <AllStatuses />
      <StatusTable />
      <p className="status-table__note">
        Some issues affecting a small percentage of stores may not be reflected
        here.
      </p>
      <EventsList />
    </div>
  );
}

export default App;
