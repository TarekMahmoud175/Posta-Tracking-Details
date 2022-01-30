import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBarComponent from "./components/ProgressBarComponent/ProgressBarComponent";
import DetailsTable from "./components/DetailsTableComponent/DetailsTable";
import AddressComponent from "./components/AddressComponent/AddressComponent";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ProgressBarComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-7">
            <DetailsTable />
          </div>
          <div className="col-md-4 offset-md-1">
            <AddressComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
