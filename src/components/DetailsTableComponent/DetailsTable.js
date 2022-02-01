import moment from "moment";
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

const DetailsTable = (props) => {
  console.log(props?.tableData?.length);
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
            {props?.tableData?.length > 0 &&
              props?.tableData.map((item) => {
                // console.log(item),
                return  (
                    <tr className="item">
                      <td>{item?.hub}</td>
                      <td>{moment(item?.timestamp).format("DD-MM-YYYY")}</td>
                      <td>{moment(item?.timestamp).format("hh:mm a")}</td>
                      <td>{item?.state}</td>
                    </tr>
                  );
              })}
          </table>
        </div>
      </div>
    </>
  );
};

export default DetailsTable;
