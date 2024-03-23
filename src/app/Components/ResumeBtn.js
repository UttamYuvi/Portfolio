"use client";
import React from "react";
import { motion } from "framer-motion";

const ResumeBtn = ({ pdfUrl }) => {
  const containerStyle = {
    position: "relative",
    textAlign: "center",
    color: "#fff", // Text color
    fontSize: "24px", // Text font size
    right: "2rem",
    bottom: "1rem",
    cursor: "pointer",
  };

  const imageStyle = {
    width: "8rem", // Make sure the image takes the full width
    height: "auto", // Maintain aspect ratio
    animation: "rotation 14s linear infinite",
  };

  const textStyle = {
    position: "absolute",
    top: "48%", // Center the text vertically
    left: "51%", // Center the text horizontally
    transform: "translate(-50%, -50%)", // Adjust for centering
    color: "black",
    fontSize: 14,
    fontWeight: 600,
    // backgroundColor: "red",
    width: "60%",
    height: "58%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid whitesmoke",
  };

  const downloadPdf = () => {
    // Function to trigger the download
    // alert("jj");
    const link = document.createElement("a");
    // console.log(link);
    link.href = pdfUrl;
    // console.log(link.href);
    link.download = "Uttam Verma Resume.pdf";
    // console.log(link.download);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
      onClick={downloadPdf}
      style={containerStyle}
    >
      <img
        src="/Web_Developer__1_-removebg.png"
        alt="Description of the image"
        style={imageStyle}
      />
      <div style={textStyle}>
        <p>Resume</p>
      </div>
    </motion.div>
  );
};

export default ResumeBtn;
