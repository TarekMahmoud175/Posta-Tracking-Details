import React from "react";
import "antd/dist/antd.css";
import { Steps, Popover } from "antd";
import "./ProgressBarComponent.css";
import moment from "moment";

const customDot = (dot, { status, index }) => {
  // console.log(index, " ====> ", status);
  return (
    // <Popover>
    <>
      {/* {dot} */}
      <img
        src="https://cpmr-islands.org/wp-content/uploads/sites/4/2019/07/test.png"
        style={{ width: 35, height: 35 }}
      />
    </>
    // </Popover>
  );
};

const ProgressBarComponent = (props) => {
  const { Step } = Steps;
  return (
    <div className="row mainRow">
      <div className="col-md-12">
        <div className="row TopRow">
          <div className="col-md-3">
            <p className="key">رقم الشحنة {props.trackingnum}</p>
            <p className="value">{props?.lastUpdate?.state}</p>
          </div>
          {/* last update */}
          <div className="col-md-3">
            <p className="key">أخر تحديث</p>
            <p className="value">
              <div className="dateHourRow">
                <p className="value val2">
                  {moment(props?.lastUpdate?.timestamp).format("hh:mm a")}{" "} 
                </p>
                <p className="value val2">
                  {" "}
                  {moment(props?.lastUpdate?.timestamp).format(
                    "DD-mm-yyyy"
                  )}{" "}
                </p>
                <p className="value val2">
                  {moment(props?.lastUpdate?.timestamp).format("dddd")}
                </p>
              </div>
            </p>
          </div>
          {/* merchant name */}
          <div className="col-md-3">
            <p className="key">اسم التاجر</p>
            <p className="value">souq.com</p>
          </div>
          {/* duo date */}
          <div className="col-md-3">
            <p className="key">موعد التسليم خلال</p>
            <p className="value">{moment(props.dueDate).format("DD MMMM YYYY") }</p>
          </div>
        </div>
        <div className="row barRow">
          <Steps current={1} progressDot={customDot}>
            <Step title="Finished" />
            <Step title="In Progress" />
            <Step title="Waiting" />
            <Step title="Waiting" />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
