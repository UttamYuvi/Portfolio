"use client";
import React from "react";
import { useState } from "react";
import "./globals.css";
import { motion } from "framer-motion";

import Tooltip from "./Components/Tooltip";

// import { useRouter } from "next/navigation";
const { default: Link } = require("next/link");

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://fontawesome.com/search?q=work&o=r&m=free
import {
  faIgloo,
  faGhost,
  faGears,
  faGraduationCap,
  faUserAstronaut,
  faUserSecret,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import ResumeBtn from "./Components/ResumeBtn";
import CircularComponent from "./Components/CircularComponent";

export const footerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 100,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      delay: 0.1,
    },
  },
};

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false);
  // alert(dark);
  // const router = useRouter();

  // const navigate = (route) => {
  //   router.push(route);
  // };

  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);",
          // background: dark
          //   ? "black"
          //   : // : "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);",
          //     "white",
          // // background: dark
          // //   ? "radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%);"
          // //   : "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            // background: "red",
            padding: "1rem",
            // minHeight: "100vh",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "left",
              // background: "blue",
            }}
          >
            <div
              style={{
                position: "fixed",
                display: "flex",
                alignItems: "center",
                padding: "0rem",
                backgroundColor: "rgba(var(--callout-rgb), 0.5)",
                border: "1px solid rgba(var(--callout-border-rgb), 0.3)",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: 50,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50,
                marginTop: "8rem",
                marginLeft: "1rem",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <span
                style={{
                  display: "flex",
                  height: "50vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  // background: "red",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "blue",
                    width: "100%",
                    // margin: "0px",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/"}>
                    <Tooltip text={"Home"} right={"50px"} top={"0px"}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 21,
                          // background: "red",
                          margin: 10,
                          padding: 0,
                        }}
                      >
                        <FontAwesomeIcon fontSize={22} icon={faIgloo} />
                      </div>
                    </Tooltip>
                  </Link>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "blue",
                    width: "100%",
                    // margin: "1rem",
                    cursor: "pointer",
                  }}
                  // onClick={() => navigate("/about")}
                >
                  <Link href={"/about"}>
                    <Tooltip text={"About"} right={"50px"} top={"0px"}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 21,
                          // background: "red",
                          margin: 0,
                          padding: 0,
                        }}
                      >
                        <FontAwesomeIcon fontSize={22} icon={faUserAstronaut} />
                      </div>
                    </Tooltip>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "blue",
                    width: "100%",
                    // margin: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/skills"}>
                    <Tooltip text={"Skills"} right={"50px"} top={"0px"}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 21,
                          // background: "red",
                          margin: 10,
                          padding: 0,
                        }}
                      >
                        <FontAwesomeIcon fontSize={20} icon={faGhost} />
                      </div>
                    </Tooltip>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "blue",
                    width: "100%",
                    // margin: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/education"}>
                    <Tooltip text={"Education"} right={"50px"} top={"0px"}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 21,
                          // background: "red",
                          margin: 10,
                          padding: 0,
                        }}
                      >
                        <FontAwesomeIcon fontSize={20} icon={faGraduationCap} />
                      </div>
                    </Tooltip>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // background: "blue",
                    width: "100%",
                    // margin: "1rem",
                    cursor: "pointer",
                  }}
                >
                  <Link href={"/projects"}>
                    <Tooltip text={"Projects"} right={"50px"} top={"0px"}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          width: 21,
                          // background: "red",
                          // margin: 10,
                          padding: 0,
                        }}
                      >
                        <FontAwesomeIcon fontSize={20} icon={faBriefcase} />
                      </div>
                    </Tooltip>
                  </Link>
                </div>

                {/* <div style={{ display: "flex" }}>
                  <FontAwesomeIcon icon={faUserAstronaut} />
                </div>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon icon={faGears} />
                </div>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div style={{ display: "flex" }}>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div> */}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              // background: "blue",
            }}
          >
            <div
              style={{
                display: "flex",
                // background: "yellow",
                width: "100%",
              }}
            >
              <div style={{ width: "47%" }}></div>

              <div
                style={
                  {
                    // background: "crimson",
                  }
                }
              >
                <div
                  style={{
                    display: "flex",
                    // border: "1px solid black",
                    borderRadius: "50%",
                    // margin: 2,
                    // background: "black",
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    // width: "40%",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      // margin: 18,
                      fontSize: 22,
                      fontWeight: 800,
                      // color: "white",
                    }}
                  >
                    {/* UV */}
                    <CircularComponent setDark={setDark} dark={dark} />
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "47%",
                  // background: "green",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    // background: "pink",
                    justifyContent: "space-evenly",
                    // width: "76%",
                    width: "30%",
                    alignItems: "center",
                  }}
                >
                  {/* <div style={{ display: "flex" }}>tw</div> */}
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    <Link
                      href={
                        "https://www.linkedin.com/in/uttam-verma-066500231/"
                      }
                    >
                      <Tooltip text={"Linkedin"}>
                        <img src="linkedin.png" style={{ width: "3rem" }} />
                      </Tooltip>
                    </Link>
                  </div>
                  <div style={{ display: "flex", cursor: "pointer" }}>
                    <Link href={"https://github.com/UttamYuvi"}>
                      <Tooltip text={"GutHub"}>
                        <img src="git.png" style={{ width: "2rem" }} />
                      </Tooltip>
                    </Link>
                  </div>
                  {/* <div style={{ display: "flex", cursor: "pointer" }}>
                    <Link href={"https://twitter.com/home"}>
                      <Tooltip text={"Twitter"}>
                        <img src="twitter.gif" style={{ width: "4rem" }} />
                      </Tooltip>
                    </Link>
                  </div>

                  <div style={{ display: "flex", cursor: "pointer" }}>
                    <Link href={"https://www.instagram.com/"}>
                      <Tooltip text={"Instagram"}>
                        <img src="ig.png" style={{ width: "2rem" }} />
                      </Tooltip>
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
        <div
          whileHover={{ scale: [null, 1.5, 1.4] }}
          transition={{ duration: 0.3 }}
          style={{
            display: "flex",
            // padding: "3rem",
            position: "fixed",
            right: 4,
            bottom: 4,
          }}
        >
          <ResumeBtn pdfUrl={"/document.pdf"} />
        </div>

        <motion.footer
          variants={footerVariants}
          initial="hidden"
          whileInView="show"
          className="footer"
        >
          <div className="connect">Connect</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="underline" />
          </div>
          <div className="container">
            <div className="contact">vuttam2002@gmail.com</div>
            <div className="contact">+91 7879972612</div>
            <div className="copyright">
              Copyright © 2024 - UttamVerma. All rights reserved.
            </div>
            <div className="contact">naukri ln</div>
          </div>
        </motion.footer>
      </body>
    </html>
  );
}
