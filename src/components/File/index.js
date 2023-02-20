
import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "../../index.css";
const ref = React.createRef();

const Button = ({ formFields, email, handleSubmit, setEmail }) => {
  const {
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    b1,
    b2,
    b3,
    b4,
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    e1,
    e2,
    e3,
    e4,
    e5,
    e6,
    e7,
    e8,
    f1,
    f2,
    f3,
    f4,
    f5,
    g1,
    g2,
    g3,
    g4,
    g5,
    g6,
    g7,
  } = formFields;
  const options = {
    // orientation: 'landscape',
    unit: "in",
    format: [20, 25],
  };
  return (
    <div className="App">
      <Pdf
        targetRef={ref}
        filename={`${email}.pdf`}
        options={options}
        scale={1}
        x={0}
        y={0}
      >
        {({ toPdf }) => (
          <div>
            <p className="my-p"> The email will be sent to : {email}</p>
            <button
              className="my-button"
              onClick={() => {
                localStorage.removeItem("userEmail");
                setEmail("");
                window.location.reload();
              }}
            >
              Change Email
            </button>
            <button
              onClick={async () => {
                // if (email === '') {
                //   return  toast.error("Email is required", {
                //     position: "bottom-right",
                //   });
                // }
                toPdf();
                // const data = await handleSubmit();
                // console.log("data", data);

                // toPdf();
              }}
              className="pdf-button"
            >
              Download File{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cloud-arrow-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
                />
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
              </svg>
            </button>
          </div>
        )}
      </Pdf>
      <div ref={ref}>
        <div
          id="page1-div"
          style={{
            position: "relative",
            //  width: "1838px",
            // height: "2601px"
          }}
        >
          <img
            width={1838}
            height={2601}
            src="target001.png"
            alt="background image"
          />
          <p
            style={{
              position: "absolute",
              top: "227px",
              left: "424px",
              whiteSpace: "nowrap",
            }}
            className="ft10"
          >
            Self-Score Your Pitch
          </p>
          <p
            style={{
              position: "absolute",
              top: "287px",
              left: "229px",
              whiteSpace: "nowrap",
            }}
            className="ft11"
          >
            SCORE EACH QUESTION
          </p>
          <p
            style={{
              position: "absolute",
              top: "287px",
              left: "446px",
              whiteSpace: "nowrap",
            }}
            className="ft12"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1 = Very poor 2 = Poor
            3&nbsp;=&nbsp;Good&nbsp;4&nbsp;=&nbsp;Very&nbsp;good&nbsp;5&nbsp;=&nbsp;Excellent&nbsp;
          </p>
          <p
            style={{
              position: "absolute",
              top: "336px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>NAME&nbsp;OF&nbsp;YOUR&nbsp;PROJECT:&nbsp;</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "327px",
              left: "1085px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>Score&nbsp;each ques:on&nbsp;&nbsp;</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "346px",
              left: "1129px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>(1&nbsp;to&nbsp;5)</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "336px",
              left: "1267px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>Weighing</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "392px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>A.&nbsp;PRESENTER</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "417px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the presenter convincing
          </p>
          <p
            style={{
              position: "absolute",
              top: "417px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "442px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the problem
            clear?
          </p>
          <p
            style={{
              position: "absolute",
              top: "443px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "467px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the solution
            clear?
          </p>
          <p
            style={{
              position: "absolute",
              top: "468px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "492px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the user and
            market clear?
          </p>
          <p
            style={{
              position: "absolute",
              top: "493px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "517px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the growth
            path clear?
          </p>
          <p
            style={{
              position: "absolute",
              top: "518px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "542px",
              left: "169px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the presenter well practiced ?
          </p>
          <p
            style={{
              position: "absolute",
              top: "542px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {a6}
          </p>
          <p
            style={{
              position: "absolute",
              top: "568px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "568px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+a1 + +a2 + +a3 + +a4 + +a5 + +a6) / 6).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "569px",
              left: "1285px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>10%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "618px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>B. PROJECT DESCRIPTION</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "643px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the project expressed simply and
            clearly for others to understand?
          </p>
          <p
            style={{
              position: "absolute",
              top: "643px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {b1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "668px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What stage of development the project
            is at (ie is it an idea or at prototype stage)?
          </p>
          <p
            style={{
              position: "absolute",
              top: "668px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {b2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "693px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation identify the
            next steps and time frames required to develop the project further?
          </p>
          <p
            style={{
              position: "absolute",
              top: "693px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {b3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "718px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation suggest the
            market opportunity is attractive?
          </p>
          <p
            style={{
              position: "absolute",
              top: "718px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {b4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "744px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "744px",
              left: "1136px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+b1 + +b2 + +b3 + +b4) / 4).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "744px",
              left: "1285px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>10%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "794px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>C. THE MARKET OPPORTUNITY</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "819px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation explain why the
            project is such a great idea?
          </p>
          <p
            style={{
              position: "absolute",
              top: "819px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "844px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation identify
            competitors, and explain the competitive advantage of their project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "845px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "869px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project incorporate a high
            level of innovation?
          </p>
          <p
            style={{
              position: "absolute",
              top: "870px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "894px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the project likely to 'disrupt'
            the marketplace?
          </p>
          <p
            style={{
              position: "absolute",
              top: "895px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "919px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have the potential
            to impact the global market?
          </p>
          <p
            style={{
              position: "absolute",
              top: "920px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "944px",
              left: "169px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation quantify the
            potential size of the market opportunity?
          </p>
          <p
            style={{
              position: "absolute",
              top: "945px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c6}
          </p>
          <p
            style={{
              position: "absolute",
              top: "969px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation discuss the
            potential barriers to success?
          </p>
          <p
            style={{
              position: "absolute",
              top: "971px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {c7}
          </p>
          <p
            style={{
              position: "absolute",
              top: "995px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "994px",
              left: "1141px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+c1 + +c2 + +c3 + +c4 + +c5 + +c6 + +c7) / 7).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "995px",
              left: "1285px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>20%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1045px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>D. THE TARGET MARKET</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1070px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation clearly
            identified a target market / customer for their project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1070px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1095px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have a saleable
            valuable proposition to a well define target market / customer?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1096px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1120px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have evidence of
            'need' from the target market? e.g. letters of intent, e.g. early
            adopters?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1121px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1145px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation adequately
            quantify the size of the target market?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1146px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1170px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address
            customer acquisition?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1172px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1195px",
              left: "169px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the product / service have a
            clear route to market?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1195px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {d6}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1221px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "1220px",
              left: "1141px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+d1 + +d2 + +d3 + +d4 + +d5 + +d6) / 6).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1221px",
              left: "1279px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>17.5%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1271px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>E. THE BUSINESS MODEL</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1297px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the proposed business model
            appear to be commercially viable?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1296px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1321px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation show how the
            proposed business would function on a day-to-day basis?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1322px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1346px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how the
            product will be delivered (or distributed) and is it scalable?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1347px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1371px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation clearly
            identified a target market / customer for their project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1373px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1396px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how
            they might scale the project / business?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1398px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1421px",
              left: "169px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How well does the business model meet
            the needs of the target market / customer?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1423px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e6}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1446px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have roles and responsibilities
            across key functions of the business been considered (and who would
            perform them)?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1448px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e7}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1470px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation identified third
            parties (e.g. contractors) if they are needed to successfully
            deliver the project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1470px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {e8}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1495px",
              left: "658px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL</b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "1495px",
              left: "1136px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+e1 + +e2 + +e3 + +e4 + +e5 + +e6 + +e7 + +e8) / 8).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1495px",
              left: "1285px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>15%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1545px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>F. FINANCIALS </b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1571px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the proposed project appear to
            be financially viable?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1570px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {f1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1595px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation provide details
            of the estimated funding required to 'get the project to market'?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1596px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {f2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1620px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation have an
            expected price point for their product/service?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1621px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {f3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1645px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation demonstrate
            realistic financial projections for the project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1646px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {f4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1670px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how the
            continued development and launch of the project will be financed?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1670px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {f5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1696px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "1696px",
              left: "1141px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+f1 + +f2 + +f3 + +f4 + +f5) / 5).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1696px",
              left: "1285px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>15%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1746px",
              left: "160px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>G. MANAGEMENT AND INTELLECTUAL PROPERTY</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "1772px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation adequately
            explain the current status of the development of proprietary
            knowledge?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1771px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g1}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1796px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How valuable does the proprietary
            knowledge appear to be?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1797px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g2}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1821px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project appear to have a
            competitive advantage on entering the market?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1822px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g3}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1846px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do the current founders and team
            appear to be able to maintain that advantage?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1847px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g4}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1871px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            5&nbsp;&nbsp;&nbsp;&nbsp;Can the proprietary knowledge /
            intellectual property be adequately protected?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1873px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g5}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1896px",
              left: "169px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            6&nbsp;&nbsp;&nbsp;&nbsp;Can the project be launched by the current
            founders and team?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1898px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g6}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1921px",
              left: "168px",
              whiteSpace: "nowrap",
            }}
            className="ft14"
          >
            7&nbsp;&nbsp;&nbsp;&nbsp;Is other external expertise outlined if
            needed to continue to develop and then launch the project?
          </p>
          <p
            style={{
              position: "absolute",
              top: "1921px",
              left: "1149px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {g7}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1947px",
              left: "659px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>SUB TOTAL </b>
            (based on an average of your eight scores)
          </p>
          <p
            style={{
              position: "absolute",
              top: "1947px",
              left: "1141px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            {((+g1 + +g2 + +g3 + +g4 + +g5 + +g6 + +g7) / 7).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "1947px",
              left: "1279px",
              whiteSpace: "nowrap",
            }}
            className="ft13"
          >
            <b>12.5%</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "2007px",
              left: "448px",
              whiteSpace: "nowrap",
            }}
            className="ft16"
          >
            <b>YOUR TOTAL SCORE </b>
            (based on weighting of your sub totals)
          </p>
          <p
            style={{
              position: "absolute",
              top: "2007px",
              left: "1148px",
              whiteSpace: "nowrap",
            }}
            className="ft12"
          >
            {(
              ((+a1 + +a2 + +a3 + +a4 + +a5 + +a6) / 6) * 0.1 +
              ((+b1 + +b2 + +b3 + +b4) / 4) * 0.1 +
              ((+c1 + +c2 + +c3 + +c4 + +c5 + +c6 + +c7) / 7) * 0.2 +
              ((+d1 + +d2 + +d3 + +d4 + +d5 + +d6) / 6) * 1.75 +
              ((+e1 + +e2 + +e3 + +e4 + +e5 + +e6 + +e7 + +e8) / 8) * 0.15 +
              ((+f1 + +f2 + +f3 + +f4 + +f5) / 5) * 0.15 +
              ((+g1 + +g2 + +g3 + +g4 + +g5 + +g6 + +g7) / 7) * 0.125
            ).toFixed(2)}
          </p>
          <p
            style={{
              position: "absolute",
              top: "2071px",
              left: "159px",
              whiteSpace: "nowrap",
            }}
            className="ft17"
          >
            <b>THREE</b> <b>WARNINGS</b>: 1. Your score results may be a helpful
            sign but do not cover all the information you need for success 2. It
            is essential
          </p>
          <p
            style={{
              position: "absolute",
              top: "2094px",
              left: "159px",
              whiteSpace: "nowrap",
            }}
            className="ft18"
          >
            that you ask for help from those who’ve gone before, and who speak
            from their valuable experience 3. For your safety and certainty get
          </p>
          <p
            style={{
              position: "absolute",
              top: "2117px",
              left: "159px",
              whiteSpace: "nowrap",
            }}
            className="ft18"
          >
            professional legal and accounting advice.
          </p>
          <p
            style={{
              position: "absolute",
              top: "2168px",
              left: "671px",
              whiteSpace: "nowrap",
            }}
            className="ft19"
          >
            <b>For use of the addressee only</b>
          </p>
          <p
            style={{
              position: "absolute",
              top: "2194px",
              left: "214px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            The design and informaJon contained in the Self-Score Your Pitch,
            and the name Being Investable remain the property of John C H Perry
            ©2023
          </p>
          <p
            style={{
              position: "absolute",
              top: "2231px",
              left: "214px",
              whiteSpace: "nowrap",
            }}
            className="ft15"
          >
            Mail: Increasing Returns Suite 760, 585 LiZle Collins Street,
            Melbourne, VIC 3000 Australia. Email: hello@increasingreturns.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Button;










// import React from "react";
// import ReactDOM from "react-dom";
// import Pdf from "react-to-pdf";
// import { ToastContainer, toast } from "react-toastify";

// import "../../index.css";
// const ref = React.createRef();

// const Button = ({ formFields, email, handleSubmit , setEmail}) => {
//   const {
//     a1,
//     a2,
//     a3,
//     a4,
//     a5,
//     a6,
//     b1,
//     b2,
//     b3,
//     b4,
//     c1,
//     c2,
//     c3,
//     c4,
//     c5,
//     c6,
//     c7,
//     d1,
//     d2,
//     d3,
//     d4,
//     d5,
//     d6,
//     e1,
//     e2,
//     e3,
//     e4,
//     e5,
//     e6,
//     e7,
//     e8,
//     f1,
//     f2,
//     f3,
//     f4,
//     f5,
//     g1,
//     g2,
//     g3,
//     g4,
//     g5,
//     g6,
//     g7,
//   } = formFields;
//   const options = {
//     // orientation: 'landscape',
//     unit: "in",
//     format: [22, 40],
//   };

//   console.log("email in file", email);
//   return (
//     <div className="App">
//       <ToastContainer />
//       <Pdf
//         targetRef={ref}
//         filename={`${email}.pdf`}
//         options={options}
//         scale={1}
//         x={0}
//         y={0}
//       >
//         {({ toPdf }) => (
//           <div>
//             <p className="my-p"> The email will be sent to : {email}</p>
//             <button
//               className="my-button"
//               onClick={() => {
//                 localStorage.removeItem("userEmail");
//                 setEmail("");
//                 window.location.reload();
//               }}
//             >
//               Change Email
//             </button>
//             <button
//               onClick={async () => {
//                 // if (email === '') {
//                 //   return  toast.error("Email is required", {
//                 //     position: "bottom-right",
//                 //   });
//                 // }
//                 toPdf();
//                 // const data = await handleSubmit();
//                 // console.log("data", data);

//                 // toPdf();
//               }}
//               className="pdf-button"
//             >
//               Download File{" "}
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-cloud-arrow-down"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708l2 2z"
//                 />
//                 <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
//               </svg>
//             </button>
//           </div>
//         )}
//       </Pdf>
//       <div ref={ref}>
//         <div
//           id="page1-div"
//           style={{
//             position: "relative",
//             width: "2238px",
//             height: "2601px",
//           }}
//         >
//           <img
//            style={{
//             width:"1938px",
//             height:"2601px"
//            }}
//             src="target001.png"
//             alt="background image"
//           />
//           <p
//             style={{
//               position: "absolute",
//               top: "227px",
//               left: "424px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft10"
//           >
//             Self-Score Your Pitch
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "287px",
//               left: "229px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft11"
//           >
//             SCORE EACH QUESTION
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "287px",
//               left: "446px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft12"
//           >
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : 1 = Very poor 2 = Poor
//             3&nbsp;=&nbsp;Good&nbsp;4&nbsp;=&nbsp;Very&nbsp;good&nbsp;5&nbsp;=&nbsp;Excellent&nbsp;
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "336px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>NAME&nbsp;OF&nbsp;YOUR&nbsp;PROJECT:&nbsp;</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "327px",
//               left: "1085px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>Score&nbsp;each ques:on&nbsp;&nbsp;</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "346px",
//               left: "1129px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>(1&nbsp;to&nbsp;5)</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "336px",
//               left: "1267px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>Weighing</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "392px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>A.&nbsp;PRESENTER</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "417px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the presenter convincing
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "417px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "442px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the problem
//             clear?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "443px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "467px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the solution
//             clear?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "468px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "492px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the user and
//             market clear?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "493px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "517px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the growth
//             path clear?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "518px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "542px",
//               left: "169px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the presenter well practiced ?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "542px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {a6}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "568px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your six scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "568px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+a1 + +a2 + +a3 + +a4 + +a5 + +a6) / 6).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "569px",
//               left: "1285px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>10%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "618px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>B. PROJECT DESCRIPTION</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "643px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the project expressed simply and
//             clearly for others to understand?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "643px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {b1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "668px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What stage of development the project
//             is at (ie is it an idea or at prototype stage)?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "668px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {b2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "693px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation identify the
//             next steps and time frames required to develop the project further?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "693px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {b3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "718px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation suggest the
//             market opportunity is attractive?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "718px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {b4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "744px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your four scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "744px",
//               left: "1136px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+b1 + +b2 + +b3 + +b4) / 4).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "744px",
//               left: "1285px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>10%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "794px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>C. THE MARKET OPPORTUNITY</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "819px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation explain why the
//             project is such a great idea?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "819px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "844px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation identify
//             competitors, and explain the competitive advantage of their project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "845px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "869px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project incorporate a high
//             level of innovation?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "870px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "894px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Is the project likely to 'disrupt'
//             the marketplace?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "895px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "919px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have the potential
//             to impact the global market?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "920px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "944px",
//               left: "169px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation quantify the
//             potential size of the market opportunity?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "945px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c6}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "969px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation discuss the
//             potential barriers to success?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "971px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {c7}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "995px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your seven scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "994px",
//               left: "1141px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+c1 + +c2 + +c3 + +c4 + +c5 + +c6 + +c7) / 7).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "995px",
//               left: "1285px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>20%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1045px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>D. THE TARGET MARKET</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1070px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation clearly
//             identified a target market / customer for their project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1070px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1095px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have a saleable
//             valuable proposition to a well define target market / customer?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1096px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1120px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project have evidence of
//             'need' from the target market? e.g. letters of intent, e.g. early
//             adopters?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1121px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1145px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation adequately
//             quantify the size of the target market?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1146px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1170px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address
//             customer acquisition?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1172px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1195px",
//               left: "169px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the product / service have a
//             clear route to market?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1195px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {d6}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1221px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your six scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1220px",
//               left: "1141px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+d1 + +d2 + +d3 + +d4 + +d5 + +d6) / 6).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1221px",
//               left: "1279px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>17.5%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1271px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>E. THE BUSINESS MODEL</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1297px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the proposed business model
//             appear to be commercially viable?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1296px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1321px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation show how the
//             proposed business would function on a day-to-day basis?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1322px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1346px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how the
//             product will be delivered (or distributed) and is it scalable?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1347px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1371px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation clearly
//             identified a target market / customer for their project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1373px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1396px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how
//             they might scale the project / business?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1398px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1421px",
//               left: "169px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How well does the business model meet
//             the needs of the target market / customer?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1423px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e6}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1446px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Have roles and responsibilities
//             across key functions of the business been considered (and who would
//             perform them)?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1448px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e7}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1470px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation identified third
//             parties (e.g. contractors) if they are needed to successfully
//             deliver the project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1470px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {e8}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1495px",
//               left: "658px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL</b>
//             (based on an average of your eight scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1495px",
//               left: "1136px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+e1 + +e2 + +e3 + +e4 + +e5 + +e6 + +e7 + +e8) / 8).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1495px",
//               left: "1285px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>15%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1545px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>F. FINANCIALS </b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1571px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the proposed project appear to
//             be financially viable?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1570px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {f1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1595px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation provide details
//             of the estimated funding required to 'get the project to market'?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1596px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {f2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1620px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation have an
//             expected price point for their product/service?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1621px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {f3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1645px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation demonstrate
//             realistic financial projections for the project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1646px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {f4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1670px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how the
//             continued development and launch of the project will be financed?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1670px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {f5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1696px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your five scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1696px",
//               left: "1141px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+f1 + +f2 + +f3 + +f4 + +f5) / 5).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1696px",
//               left: "1285px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>15%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1746px",
//               left: "160px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>G. MANAGEMENT AND INTELLECTUAL PROPERTY</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1772px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation adequately
//             explain the current status of the development of proprietary
//             knowledge?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1771px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g1}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1796px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How valuable does the proprietary
//             knowledge appear to be?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1797px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g2}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1821px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the project appear to have a
//             competitive advantage on entering the market?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1822px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g3}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1846px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Do the current founders and team
//             appear to be able to maintain that advantage?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1847px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g4}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1871px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             5&nbsp;&nbsp;&nbsp;&nbsp;Can the proprietary knowledge /
//             intellectual property be adequately protected?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1873px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g5}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1896px",
//               left: "169px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             6&nbsp;&nbsp;&nbsp;&nbsp;Can the project be launched by the current
//             founders and team?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1898px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g6}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1921px",
//               left: "168px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft14"
//           >
//             7&nbsp;&nbsp;&nbsp;&nbsp;Is other external expertise outlined if
//             needed to continue to develop and then launch the project?
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1921px",
//               left: "1149px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {g7}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1947px",
//               left: "659px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>SUB TOTAL </b>
//             (based on an average of your seven scores)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1947px",
//               left: "1141px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             {((+g1 + +g2 + +g3 + +g4 + +g5 + +g6 + +g7) / 7).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "1947px",
//               left: "1279px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft13"
//           >
//             <b>12.5%</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2007px",
//               left: "448px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft16"
//           >
//             <b>YOUR TOTAL SCORE </b>
//             (based on weighting of your sub totals)
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2007px",
//               left: "1148px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft12"
//           >
//             {(
//               ((+a1 + +a2 + +a3 + +a4 + +a5 + +a6) / 6) * 0.1 +
//               ((+b1 + +b2 + +b3 + +b4) / 4) * 0.1 +
//               ((+c1 + +c2 + +c3 + +c4 + +c5 + +c6 + +c7) / 7) * 0.2 +
//               ((+d1 + +d2 + +d3 + +d4 + +d5 + +d6) / 6) * 1.75 +
//               ((+e1 + +e2 + +e3 + +e4 + +e5 + +e6 + +e7 + +e8) / 8) * 0.15 +
//               ((+f1 + +f2 + +f3 + +f4 + +f5) / 5) * 0.15 +
//               ((+g1 + +g2 + +g3 + +g4 + +g5 + +g6 + +g7) / 7) * 0.125
//             ).toFixed(2)}
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2071px",
//               left: "159px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft17"
//           >
//             <b>THREE</b> <b>WARNINGS</b>: 1. Your score results may be a helpful
//             sign but do not cover all the information you need for success 2. It
//             is essential
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2094px",
//               left: "159px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft18"
//           >
//             that you ask for help from those who’ve gone before, and who speak
//             from their valuable experience 3. For your safety and certainty get
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2117px",
//               left: "159px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft18"
//           >
//             professional legal and accounting advice.
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2168px",
//               left: "671px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft19"
//           >
//             <b>For use of the addressee only</b>
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2194px",
//               left: "214px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             The design and informaJon contained in the Self-Score Your Pitch,
//             and the name Being Investable remain the property of John C H Perry
//             ©2023
//           </p>
//           <p
//             style={{
//               position: "absolute",
//               top: "2231px",
//               left: "214px",
//               whiteSpace: "nowrap",
//             }}
//             className="ft15"
//           >
//             Mail: Increasing Returns Suite 760, 585 LiZle Collins Street,
//             Melbourne, VIC 3000 Australia. Email: hello@increasingreturns.com
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Button;
