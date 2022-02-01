import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBarComponent from "./components/ProgressBarComponent/ProgressBarComponent";
import DetailsTable from "./components/DetailsTableComponent/DetailsTable";
import AddressComponent from "./components/AddressComponent/AddressComponent";
import { TrackingService } from "./apis/Services/TrackingServices";
import { useEffect, useState } from "react";
import { Button } from "antd";

function App() {
     
  const orders = [
    { number: "6636234", text: "الطلب   6636234" },
    { number: "7234258", text: "الطلب 7234258 " },
    { number: "1094442", text: "الطلب 1094442" },
    { number: "9442984", text: "الطلب 9442984" },
  ];
  const [trackingRes, setTrackingRes] = useState({});
  const [trackingNumber, settrackingNumber] = useState(null);

  const getTrackingData = (trackNum) => {
    setTrackingRes({});
    TrackingService.getTrackingDetails(trackNum)
      .then((res) => {
        console.log("ressss =======>  ", res);
        setTrackingRes(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (trackingNumber) {
      getTrackingData(trackingNumber);
    }
  }, [trackingNumber]);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          {orders.map((item) => {
            return (
              <Button
                key={item.number}
                className={
                  item.number == trackingNumber ? "btn btnFocused" : "btn btnNotFocused"
                }
                onClick={() => {
                  settrackingNumber(item.number);
                }}
              >
                {item.text}
              </Button>
            );
          })}
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
