import React from "react";
import "./styles/drill.css";
import Layout from "../components/layouts/layout";
import ExpertTipsList from "./StaticpageComponents/ExpertTipsList";
import Sidebar from "../components/Sidebar";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Ball, cones, cleats",
    image:
      "https://previews.123rf.com/images/koonsiri/koonsiri1903/koonsiri190300030/119291790-ladder-drills-goal-soccer-ball-marker-cones-sports-shoes-and-bottle-water-on-green-artificial-turf-f.jpg",
    description:
      " This is all the necessary equipments for a workout. If you have a field with a goalpost? Great. Anything else is extra. For games you need Shin pads, and goalkeeper gloves if you are a goalkeeper",
  },
];

export default function Equipment() {
  

  return (
    <>
    <Sidebar/>
      <Layout>
        <h1 className="cut-text">Equipments</h1>
        <div>
          A soccer player feels comfortable wearing soccer equipment in the
          field. Performing well and keeping safe while playing soccer depends
          mostly on soccer gear you should use. The equipment a soccer player
          wear on the ground helps him to go ahead performing well. So, don’t
          appear on the field without wearing your protective soccer equipment.
        </div>
        <ExpertTipsList meetups={DUMMY_DATA} />
      </Layout>
    </>
  );
}
