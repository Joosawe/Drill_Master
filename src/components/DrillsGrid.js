import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import "./Styles/DrillsGrid.css";


const DrillsGrid = ({ setSelectedLink }) => {
  const { docs } = useFirestore("Drills");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            s
            onClick={() => setSelectedLink(doc.url)}
          >
            <motion.video
              height="400"
              width="100%"
              src={doc.url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
            <h3>{doc.title}</h3>
            <p>{doc.description}</p>
          </motion.div>
        ))}
    </div>
  );
};

export default DrillsGrid;
