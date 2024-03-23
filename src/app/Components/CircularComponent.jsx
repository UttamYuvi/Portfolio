"use client";
import React from "react";
import { motion } from "framer-motion";

const CircularComponent = (props) => {
  const handleBackground = () => {
    // alert("ss");
    props.setDark(!props.dark);
  };
  return (
    <motion.div
      style={{
        width: 75,
        height: 75,
        borderRadius: "50%",
        backgroundColor: props.dark ? "#FFF" : "#000",
        cursor: "pointer",
      }}
      whileHover={{
        scale: 1,
        backgroundColor: props.dark ? "#000" : "#FFF",
        transition: { duration: 0.5 },
      }}
      // onClick={() => handleBackground()}
    >
      <motion.div
        whileHover={{
          scale: 1,
          color: props.dark ? "#FFF" : "#000",
          transition: { duration: 0.5 },
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: props.dark ? "#000" : "#FFF",
          // background: "red",
          height: "100%",
          fontSize: 30,
        }}
      >
        UV
      </motion.div>
    </motion.div>
  );
};

export default CircularComponent;
