import React, { useState } from "react";
// import PDFFile from "./components/pdf";
// import { PDFDownloadLink } from "@react-pdf/renderer";
import File from "../File/index";
import Modal from "../Modal/index";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
import ConvertKit from "../ConvertKit";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
// import { ColorRing } from  'react-loader-spinner'
import { Spin } from "antd";
// import { useNavigate } from "react-router-dom";
// import { transporter, mailOptions } from "./config";

const defaultFormFields = {
  a1: 0,
  a2: 0,
  a3: 0,
  a4: 0,
  a5: 0,
  a6: 0,
  b1: 0,
  b2: 0,
  b3: 0,
  b4: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  d1: 0,
  d2: 0,
  d3: 0,
  d4: 0,
  d5: 0,
  d6: 0,
  e1: 0,
  e2: 0,
  e3: 0,
  e4: 0,
  e5: 0,
  e6: 0,
  e7: 0,
  e8: 0,
  f1: 0,
  f2: 0,
  f3: 0,
  f4: 0,
  f5: 0,
  g1: 0,
  g2: 0,
  g3: 0,
  g4: 0,
  g5: 0,
  g6: 0,
  g7: 0,
};

const App = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
 
  const [named, setNamed] = useState("");
  const [buffer, setBuffer] = useState("");
  const [loading, setLoading] = useState("");
  const userEmail = localStorage.getItem("userEmail");

  const [email, setEmail] = useState(userEmail);
  // 
   const [show, setShow] = useState(true);
    const checkSubscribe = email === null ? false : true;
    const [subscribe, setSubscribe] = useState(checkSubscribe);
  console.log('email', email)
  // const navigate = useNavigate();

  const handleShow = () => setShow(true);
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log("formFields", formFields);
  console.log("email", email);

  const handleClose = () => {
    console.log("email", email);
    if (email === "" || email === null) {
      return toast.info("Enter Email to Subscribe", {
        position: "bottom-right",
      });
    }
     if (!subscribe) {
       return toast.info("Please Subscribe", {
         position: "bottom-right",
       });
     }

    setShow(false);
  };

  const handleSubmit = async () => {
    if (email === "") {
      return toast.error("Email is required", {
        position: "bottom-right",
      });
    }
    setLoading(true);
    try {
      const downloadResponse = await axios.post(
        "https://bizfund-exceltopdf.herokuapp.com/api/email/sendEmail",
        {
          // to: userEmail,
          to: email,
          subject: "testing",
          text: "Hey",
          html: "hey",
          fileName: `file.pdf`,
          grades: formFields,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (downloadResponse) {
        console.log("downloadResponse", downloadResponse);
        toast.success("Email Sent", {
          position: "bottom-right",
        });
        const hiddenElement = document.createElement("a");
        // hiddenElement.setAttribute("target", "_blank");
        hiddenElement.href = downloadResponse.data.fileURL;
        console.log("hiddenElement", hiddenElement);
        hiddenElement.click();
  
     
      }
    } catch (error) {
      console.log("errrr", error);
      localStorage.removeItem("userEmail");
      setLoading(false);
    }
    finally{
        localStorage.removeItem("userEmail");
         setLoading(false);
         setShow(true);
      window.location.reload();
    }
  };

  function file2Buffer(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        resolve(event.target.result);
      };

      reader.onerror = (err) => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  }

  const fileHandler = async (e) => {
    console.log("info", e.target.files[0]);
    if (e.target.files[0].type !== "application/pdf") {
      return alert("Please Upload a pdf File");
    }
    const fileBuffer = await file2Buffer(e.target.files[0]);
    console.log("fileBuffer", fileBuffer);
    const splitted = fileBuffer.split(",")[1];
    setBuffer(splitted);
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const nameHandler = (e) => {
    console.log(e.target.value);
    setNamed(e.target.value);
  };
  const proceedHandler = () => {
    if (email === "") {
      return toast.error("Email is required", {
        position: "bottom-right",
      });
    }
    setShow(false);
  };

  console.log("email in app", email);

  return (
    <>
      <ToastContainer />
      <Spin spinning={loading}>
        <div className="app-container">
          <h1>Being Investable App</h1>
          <div className="model-container">
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Subscribe</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* <input
                  required
                  onChange={emailHandler}
                  className="form-input"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Email Address"
                  type="email"
                />
                <button data-element="submit" className="submit-btn" onClick={proceedHandler}>
                  <span>
                    Proceed{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="white"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </span>
                </button> */}
                <ConvertKit setEmail={setEmail} email={email} subscribe={subscribe}/>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="secondary" onClick={handleClose}>
                Close
              </Button> */}
                {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
              </Modal.Footer>
            </Modal>
          </div>
          <div
            id="page1-div"
            style={{
              position: "relative",
              // width: "1838px",
              // height: "2601px" ,
              //  marginTop:"-100px",
              // marginLeft:"130px"
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
              <b>Score&nbsp;each question&nbsp;&nbsp;</b>
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
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="a1"
              value={a1}
              style={{
                position: "absolute",
                top: "415px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />

            {/* <p
          style={{
            position: "absolute",
            top: "417px",
            left: "1149px",
            whiteSpace: "nowrap",
          }}
          className="ft15"
        >
          2
        </p> */}
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
            <input
              className="my-input"
              onChange={handleChange}
              name="a2"
              value={a2}
              type="number"
              min={0}
              max={5}
              style={{
                position: "absolute",
                top: "441px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "467px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the
              solution clear?
            </p>

            <input
              className="my-input"
              onChange={handleChange}
              name="a3"
              value={a3}
              type="number"
              min={0}
              max={5}
              style={{
                position: "absolute",
                top: "466px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "492px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presenter make the user
              and market clear?
            </p>

            <input
              className="my-input"
              onChange={handleChange}
              name="a4"
              type="number"
              min={0}
              max={5}
              value={a4}
              style={{
                position: "absolute",
                top: "491px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              className="my-input"
              type="number"
              min={0}
              max={5}
              onChange={handleChange}
              name="a5"
              value={a5}
              style={{
                position: "absolute",
                top: "516px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
            <input
              className="my-input"
              type="number"
              min={0}
              max={5}
              onChange={handleChange}
              name="a6"
              value={a6}
              style={{
                position: "absolute",
                top: "542px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your six scores)
            </p>
            <p
              style={{
                position: "absolute",
                top: "568px",
                left: "1135px",
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
            <input
              className="my-input"
              type="number"
              min={0}
              max={5}
              onChange={handleChange}
              name="b1"
              value={b1}
              style={{
                position: "absolute",
                top: "643px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "668px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;What stage of development the
              project is at (ie is it an idea or at prototype stage)?
            </p>

            <input
              className="my-input"
              type="number"
              min={0}
              max={5}
              onChange={handleChange}
              name="b2"
              value={b2}
              style={{
                position: "absolute",
                top: "668px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              next steps and time frames required to develop the project
              further?
            </p>

            <input
              className="my-input"
              type="number"
              min={0}
              max={5}
              onChange={handleChange}
              name="b3"
              value={b3}
              style={{
                position: "absolute",
                top: "693px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="b4"
              value={b4}
              style={{
                position: "absolute",
                top: "718px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your four scores)
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
              1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation explain why
              the project is such a great idea?
            </p>
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c1"
              value={c1}
              style={{
                position: "absolute",
                top: "819px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              competitors, and explain the competitive advantage of their
              project?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c2"
              value={c2}
              style={{
                position: "absolute",
                top: "843px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c3"
              value={c3}
              style={{
                position: "absolute",
                top: "868px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c4"
              value={c4}
              style={{
                position: "absolute",
                top: "893px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c5"
              value={c5}
              style={{
                position: "absolute",
                top: "918px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c6"
              value={c6}
              style={{
                position: "absolute",
                top: "943px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="c7"
              value={c7}
              style={{
                position: "absolute",
                top: "970px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your seven scores)
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d1"
              value={d1}
              style={{
                position: "absolute",
                top: "1070px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d2"
              value={d2}
              style={{
                position: "absolute",
                top: "1094px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d3"
              value={d3}
              style={{
                position: "absolute",
                top: "1119px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d4"
              value={d4}
              style={{
                position: "absolute",
                top: "1144px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d5"
              value={d5}
              style={{
                position: "absolute",
                top: "1169px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="d6"
              value={d6}
              style={{
                position: "absolute",
                top: "1195px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your six scores)
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e1"
              value={e1}
              style={{
                position: "absolute",
                top: "1296px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e2"
              value={e2}
              style={{
                position: "absolute",
                top: "1320px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1346px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how
              the product will be delivered (or distributed) and is it scalable?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e3"
              value={e3}
              style={{
                position: "absolute",
                top: "1345px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e4"
              value={e4}
              style={{
                position: "absolute",
                top: "1371px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e5"
              value={e5}
              style={{
                position: "absolute",
                top: "1395px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1421px",
                left: "169px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;How well does the business model
              meet the needs of the target market / customer?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e6"
              value={e6}
              style={{
                position: "absolute",
                top: "1420px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              across key functions of the business been considered (and who
              would perform them)?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e7"
              value={e7}
              style={{
                position: "absolute",
                top: "1446px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1470px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Has the presentation identified
              third parties (e.g. contractors) if they are needed to
              successfully deliver the project?
            </p>
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="e8"
              value={e8}
              style={{
                position: "absolute",
                top: "1470px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="f1"
              value={f1}
              style={{
                position: "absolute",
                top: "1570px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1595px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation provide
              details of the estimated funding required to 'get the project to
              market'?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="f2"
              value={f2}
              style={{
                position: "absolute",
                top: "1594px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="f3"
              value={f3}
              style={{
                position: "absolute",
                top: "1619px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="f4"
              value={f4}
              style={{
                position: "absolute",
                top: "1644px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1670px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Does the presentation address how
              the continued development and launch of the project will be
              financed?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="f5"
              value={f5}
              style={{
                position: "absolute",
                top: "1670px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your five scores)
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g1"
              value={g1}
              style={{
                position: "absolute",
                top: "1771px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g2"
              value={g2}
              style={{
                position: "absolute",
                top: "1795px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g3"
              value={g3}
              style={{
                position: "absolute",
                top: "1820px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g4"
              value={g4}
              style={{
                position: "absolute",
                top: "1845px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1871px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              5&nbsp;&nbsp;&nbsp;&nbsp; Can the proprietary knowledge /
              intellectual property be adequately protected?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g5"
              value={g5}
              style={{
                position: "absolute",
                top: "1871px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1896px",
                left: "169px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              6&nbsp;&nbsp;&nbsp;&nbsp; Can the project be launched by the
              current founders and team?
            </p>

            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g6"
              value={g6}
              style={{
                position: "absolute",
                top: "1896px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
            <p
              style={{
                position: "absolute",
                top: "1921px",
                left: "168px",
                whiteSpace: "nowrap",
              }}
              className="ft14"
            >
              7&nbsp;&nbsp;&nbsp;&nbsp; Is other external expertise outlined if
              needed to continue to develop and then launch the project?
            </p>
            <input
              type="number"
              min={0}
              max={5}
              className="my-input"
              onChange={handleChange}
              name="g7"
              value={g7}
              style={{
                position: "absolute",
                top: "1921px",
                left: "1076px",
                whiteSpace: "nowrap",
              }}
            />
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
              (based on an average of your seven scores)
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
              <b>THREE</b> <b>WARNINGS</b>: 1. Your score results may be a
              helpful sign but do not cover all the information you need for
              success 2. It is essential
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
              from their valuable experience 3. For your safety and certainty
              get
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
              and the name Being Investable remain the property of John C H
              Perry ©2023
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
          {/* <Form
            onSubmit={handleSubmit}
            style={{ marginTop: "20px" }}
            className="pdfForm-container"
          >
            <div className="form-content">
              <h1>Upload Pdf Form</h1>
              <input
                type="text"
                placeholder="Enter Name"
                className="form-input"
                onChange={nameHandler}
                value={named}
              />
              <input
              disabled
                value={userEmail}
                type="email"
                placeholder="Enter Email"
                onChange={emailHandler}
                className="form-input"
              />
              <input
                type="file"
                onChange={fileHandler}
                placeholder="UploadFile"
                accept=".pdf"
                style={{ marginTop: "20px" }}
              />
              <button
                variant="primary"
                type="submit"
                className="btn-btn"
                style={{
                  marginTop: "20px",
                  height: "70px",
                  width: "90%",
                  outline: "none",
                  color: "#fff",
                  border: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  borderRadius: "5px",
                  background: "linear-gradient(135deg, #20BF55, #01BAEF)",
                  transition: "all 0.3s ease",
                }}
              >
                Upload Pdf{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-cloud-arrow-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z" />
                </svg>
              </button>
            </div>
          </Form> */}

          {/* <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink> 
       <PDFFile /> */}
          <File
            formFields={formFields}
            email={email}
            handleSubmit={handleSubmit}
          />
        </div>
      </Spin>
    </>
  );
};

export default App;
