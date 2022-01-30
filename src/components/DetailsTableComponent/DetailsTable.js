import React from "react";
import "./DetailsTable.css";

const TableArr = [
  {
    branch: "مدينة نصر",
    date: "4/10/2020",
    time: "01:15 pm",
    details: "تم تسليم الشحنة ",
  },
  {
    branch: "مدينة نصر",
    date: "4/10/2020",
    time: "01:15 pm",
    details: "تم تسليم الشحنة ",
  },
  {
    branch: "مدينة نصر",
    date: "4/10/2020",
    time: "01:15 pm",
    details: "تم تسليم الشحنة ",
  },
  {
    branch: "مدينة نصر",
    date: "4/10/2020",
    time: "01:15 pm",
    details: "تم تسليم الشحنة ",
  },
];

const DetailsTable = () => {
  return (
    <>
      <div className="row">
      <h4>تفاصيل الشحنة</h4>
        <div className="col-md-12">
          <table>
            <tr className="tableHead">
              <th>الفرع</th>
              <th>التاريخ</th>
              <th>الوقت</th>
              <th>التفاصيل</th>
            </tr>
            {TableArr.map((item) => (
              <tr className="item">
                <td>{item.branch}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.details}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailsTable;
