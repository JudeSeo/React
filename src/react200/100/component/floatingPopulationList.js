import React, { useEffect, useState } from "react";
import axios from "axios";

const FloatingPopulationList = () => {
  const [appendList, setAppendList] = useState();
  const callApi = () => {
    axios
      .get(
        "http://openapi.seoul.go.kr:8088/744c414d66676e3038375065537444/json/SearchSTNBySubwayLineInfo/1/100/"
      )
      .then((response) => {
        setAppendList(appendApi(response.data.SearchSTNBySubwayLineInfo.row));
      });
  };
  const appendApi = (temp: []) =>
    temp.map((data, idx) => (
      <tr className="hidden_type" key={idx + 1}>
        <td>{idx + 1}</td>
        <td>{data.STATION_CD}</td>
        <td>{data.STATION_NM}</td>
        <td>{data.STATION_NM_ENG}</td>
        <td>{data.LINE_NUM}</td>
      </tr>
    ));

  useEffect(() => {
    callApi();
  }, []);

  return (
    <section className="sub_wrap">
      <article className="s_cnt mp_pro_li ct1 mp_pro_li_admin">
        <div className="li_top">
          <h2 className="s_tit1">서울교통공사 노선별 지하철역 정보</h2>
        </div>
        <div className="list_cont list_cont_admin">
          <table className="table_ty1 fp_tlist">
            <thead>
              <tr>
                <th>Num</th>
                <th>역코드</th>
                <th>역명</th>
                <th>영문 역명</th>
                <th>호선</th>
              </tr>
            </thead>
          </table>
          <table className="table_ty2 fp_tlist">
            <tbody>{appendList}</tbody>
          </table>
        </div>
      </article>
    </section>
  );
};

export default FloatingPopulationList;
