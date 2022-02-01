import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBarComponent from "./components/ProgressBarComponent/ProgressBarComponent";
import DetailsTable from "./components/DetailsTableComponent/DetailsTable";
import AddressComponent from "./components/AddressComponent/AddressComponent";
import { TrackingService } from "./apis/Services/TrackingServices";
import { useEffect, useState } from "react";

function App() {
  // 6636234, 7234258, 7234258,1094442
  const orders = [
    { numer: "6636234", text: "6636234 الطلب" },
    { numer: "7234258", text: "7234258 الطلب" },
    { numer: "1094442", text: "1094442 الطلب" },
  ];
  const [trackingRes, setTrackingRes] = useState({});
  const [trackingNumber, settrackingNumber] = useState(null);
  const getTrackingData = () => {
    setTrackingRes({});
    TrackingService.getTrackingDetails("1094442")
      .then((res) => {
        console.log("ressss =======>  ", res);
        setTrackingRes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTrackingData();
  }, [trackingNumber]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          
        </div>
        {trackingNumber && trackingRes ? (
          <>
            <div className="row">
              <div className="col-md-12">
                <ProgressBarComponent
                  trackingnum={trackingRes?.TrackingNumber}
                  dueDate={trackingRes?.PromisedDate}
                  lastUpdate={trackingRes.CurrentStatus}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <DetailsTable tableData={trackingRes?.TransitEvents} />
              </div>
              <div className="col-md-4 offset-md-1">
                <AddressComponent />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default App;
