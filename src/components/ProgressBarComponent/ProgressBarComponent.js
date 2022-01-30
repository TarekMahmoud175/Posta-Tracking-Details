import React from "react";
import "./ProgressBarComponent.css";




const ProgressBarComponent = () => {
  return (
    <div className="row mainRow">
      <div className="col-md-12">
        <div className="row TopRow">
          <div className="col-md-3">
            <p className="key">رقم الشحنة 398745</p>
            <p className="value">لم يتم تسليم الشحنة</p>
          </div>
          <div className="col-md-3">
            <p className="key">أخر تحديث</p>
            <p className="value">الاثنين 06/4/2020</p>
          </div>
          <div className="col-md-3">
            <p className="key">اسم التاجر</p>
            <p className="value">souq.com</p>
          </div>
          <div className="col-md-3">
            <p className="key">موعد التسليم خلال</p>
            <p className="value">3 يناير 2020</p>
          </div>
        </div>
        <div className="row barRow">
        
        </div>
      </div>
    </div>
  );
};

export default ProgressBarComponent;
