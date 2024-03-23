"use client";

import { motion } from "framer-motion";

const { default: Link } = require("next/link");

export default function HomePage() {
  const number = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ];

  const repeat = () => {
    return number.map((item) => {
      return <div>{item}</div>;
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        // background: "red",
      }}
    >
      {/* Header with circle dark mode light mode button with short name & links of teitter linkedin etc */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          // background: "red",
          margin: "1.5rem",
          width: "90%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "blue",
            width: "50%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // background: "red",
            }}
          >
            <img
              src="profile-3.jpg"
              width={"70%"}
              style={{ borderRadius: "5%" }}
            />
          </div>
        </motion.div>
        <motion.div
          animate={{ transform: "translateX(-50px)" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "pink",
            flexDirection: "column",
            width: "50%",
            // color: ,
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "1rem",
              fontWeight: 600,
              fontSize: 48,
            }}
          >
            Crafting Web Experiences with React.js and Node.js
          </div>
          <div style={{ display: "flex", margin: "1rem", fontSize: 18 }}>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects,
            showcasing my expertise in React.js and web development.
          </div>
        </motion.div>
      </div>
      {/* <div>{repeat()}</div> */}
    </div>
  );
}
