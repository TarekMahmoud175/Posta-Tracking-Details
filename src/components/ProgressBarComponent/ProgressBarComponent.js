import React from "react";
import "antd/dist/antd.css";
import { Steps } from "antd";
import "./ProgressBarComponent.css";
import moment from "moment";
import { BsCheckCircleFill, BsTruck, BsSaveFill } from "react-icons/bs";

const customDot = (dot, { status, index }) => {
  console.log(index, " ======> ", status);
  return (
    <>
      {status === "finish" && <BsCheckCircleFill className="img done" />}
      {status === "process" && <BsTruck className="img notDone" />}
      {status === "wait" && <BsTruck className="img wait" />}
      {status === "wait" && index === 3 && <BsSaveFill className="img wait" />}
    </>
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
            <p
              className={
                props?.lastUpdate?.state === "DELIVERED"
                  ? "value done"
                  : props?.lastUpdate?.state === "CANCELED"
                  ? "value canceled"
                  : "value notDone"
              }
            >
              {props?.lastUpdate?.state}
            </p>
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
            <p className="value">
              {moment(props.dueDate).format("DD MMMM YYYY")}
            </p>
          </div>
        </div>
        <div className="row barRow">
          <Steps
            current={
              props?.lastUpdate?.state === "DELIVERED"
                ? 4
                : props?.lastUpdate?.state === "PACKAGE_RECEIVED"
                ? 1
                : props?.lastUpdate?.state === "TICKET_CREATED"
                ? 0
                : 2
            }
            progressDot={customDot}
          >
            <Step title="تم انشاء الشحنة" />
            <Step title="تم استلام الشحنة من التاجر" />
            <Step title="الشحنة خرجت للتسليم" />
            <Step title="تم التسليم" />
          </Steps>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
