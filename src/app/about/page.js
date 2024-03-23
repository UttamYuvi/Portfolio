"use client";
import "./styles.css";

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
    <div className="main">
      {/* Header with circle dark mode light mode button with short name & links of teitter linkedin etc */}

      <div className="subMain">
        <motion.div
          animate={{ transform: "translateX(50px)" }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // background: "blue",
            width: "50%",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              margin: "1rem",
              fontWeight: 600,
              fontSize: 48,
              flexDirection: "column",
            }}
          >
            <div>I'm Uttam,</div>
            <div>a full stack developer</div>
          </div>
          <div
            style={{
              display: "flex",
              margin: "1rem",
              flexDirection: "column",
              height: "70vh",
              justifyContent: "space-between",
            }}
          >
            <div className="aboutPara">
              As a passionate final year B.Tech CSE student, I thrive at the
              intersection of innovation and technology. Specializing in
              React.js and Node.js development, I bring a wealth of hands-on
              experience from a dynamic 6-month internship, where I honed my
              skills on real-time projects. My journey is enriched by a
              commitment to continuous learning, as evidenced by certifications
              in frontend development from Coursera and mastery of the MERN
              Stack. With a drive for excellence and a portfolio of freelancing
              projects, I'm poised to make a meaningful impact in the
              ever-evolving world of web development.
            </div>

            <div className="school">
              <div className="schoolHead">
                B.Tech in Computer Science & Engineering
                <div className="line" />
              </div>

              <div className="schoolName">
                IPS Collage of Technology & Management, Gwalior
              </div>
              <div className="schoolData">July-2020 to Present</div>
              <div className="schoolData">7.98% CGPA</div>
            </div>
            <div className="school">
              <div className="schoolHead">
                Senior Secondary(XII), Science
                <div className="schoolunderline" />
              </div>
              <div className="schoolName">
                Rama Krishna Vishya Mandir School, Gwalior
              </div>
              <div className="schoolData">July-2019 to Jun-2020</div>
              <div className="schoolData">Percentage: 6.56%</div>
            </div>
          </div>
        </motion.div>
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
            // background: "pink",
            flexDirection: "column",
            width: "50%",
            // color: ,
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
              src="profile-4.jpg"
              width={"70%"}
              style={{ borderBottomLeftRadius: 25, borderTopRightRadius: 25 }}
            />
          </div>
        </motion.div>
      </div>
      {/* <div>{repeat()}</div> */}
    </div>
  );
}
