import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";
// import LebronStretch from "/target001.png";

const styles = StyleSheet.create({
  body: {
    // paddingTop: 35,
    // paddingBottom: 65,
    // paddingHorizontal: 35,
    position:"relative"
  },
  // title: {
  //   fontSize: 24,
  //   textAlign: "center",
  // },
  // text: {
  //   margin: 12,
  //   fontSize: 14,
  //   textAlign: "justify",
  //   fontFamily: "Times-Roman",
  // },
  image: {
     height:"2601px",
    width:"1838px"
  },

  // header: {
  //   fontSize: 12,
  //   marginBottom: 20,
  //   textAlign: "center",
  //   color: "grey",
  // },
  // pageNumber: {
  //   position: "absolute",
  //   fontSize: 12,
  //   bottom: 30,
  //   left: 0,
  //   right: 0,
  //   textAlign: "center",
  //   color: "grey",
  // },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
       <div style={{ position: "relative", width: "1838px", height: "2601px" }}>
       <Image style={styles.image} src="/target001.png" width={1838}
          height={2601}/>
         <Text
          style={{
            position: "absolute",
            top: "227px",
            left: "424px",
            whiteSpace: "nowrap",
          }}
          className="ft10"
        >
          Self-Score Your Pitch
        </Text>
        <Text
          style={{
            position: "absolute",
            top: "287px",
            left: "229px",
            color:"red",
            whiteSpace: "nowrap",
          }}
          className="ft11"
        >
          SCORE EACH QUESTION
        </Text>
       </div>
       


      
        {/* <Text style={styles.text}>
          Oh right. I forgot about the battle. Wow, you got that off the
          Internet? 
        </Text> */}
      </Page>
    </Document>
  );
};

export default PDFFile;