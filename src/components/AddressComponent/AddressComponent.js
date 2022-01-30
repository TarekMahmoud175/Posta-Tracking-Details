import React from "react";
import "./AddressComponent.css"
import ProblemImage from "../../assets/images/problem.jpg"

const AddressComponent = () => {
  return (
    <div className="row addressRow mx-md-2">
      <h4>عنوان التسليم</h4>
      <div className="col-md-12">
        <div className="addressBlock">
          <p>
            امبابة بجوار شارع طلعت حرب مدينة العمال بجوار البرنس منزل 17 بلوك 22
            ,,,, cairo
          </p>
        </div>
        <div className="problemBlock mt-4">
          <img src={ProblemImage} alt="" />
          <div className="userAction">
            <p>هل يوجد مشكلة في شحنتك </p>
            <button className="btn btn-danger"> ابلاغ عن مشكلة</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressComponent;
