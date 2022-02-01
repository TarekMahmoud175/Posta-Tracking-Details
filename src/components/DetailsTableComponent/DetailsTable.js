import moment from "moment";
import React from "react";
import "./DetailsTable.css";


const DetailsTable = (props) => {
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
              props?.tableData.map((item,index) => {
                // console.log(item),
                return  (
                    <tr className="item" key={index}>
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
