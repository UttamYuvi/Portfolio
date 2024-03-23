"use client";
import React, { useState } from "react";
import "./style.css";

import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./Data";

const Projects = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="body">
      <div className="window">
        <nav>
          <ul>
            {tabs.map((item) => (
              <li
                key={item.project}
                onClick={() => setSelectedTab(item)}
                className={item === selectedTab ? "selected" : ""}
              >
                {`${item.project}`}
                {item === selectedTab ? (
                  <motion.div className="underline" layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <main>
          <a href={selectedTab.link}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.project : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {selectedTab ? (
                  <div className="details">
                    <div className="left">
                      <div className="heading">{selectedTab.heading}</div>
                      <div className="subData">{selectedTab.subData}</div>
                    </div>
                    <div className="right">
                      <div className="image">
                        <img
                          src={selectedTab.image}
                          width={"70%"}
                          alt="docxvision"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  "Select Project"
                )}
              </motion.div>
            </AnimatePresence>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Projects;
