/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import "./styles/drill.css";
import ExpertTipsList from "./StaticpageComponents/ExpertTipsList";
import Layout from "../components/layouts/layout";
import Sidebar from "../components/Sidebar";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Have Fun",
    image:
      "https://cdn.theathletic.com/app/uploads/2020/12/03065833/chelsea-lampard-rotation.jpg",
    description:
      "Remember above all else that this is a game and you should learn to enjoy all aspects of it. That been said, Always give 100%. Expect that of those around you and anticipate they expect that of you. Win or lose, be proud of how you played.",
  },
  {
    id: "m2",
    title: "Ask Questions!!",
    image:
      "https://www.mcall.com/resizer/TeiZVC9_MPpfPvV7OF0EgGPAppU=/1200x0/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/I4AHUBX5EJFAPAXOXYTZWUA4WE.jpg",

    description:
      "This applies to everything. If you don’t know, ask. If you require clarification, get it. The more you ask and understand, the more you learn and the better you can apply the skills. While Bearing this in mind, Show respect to your coaches, referees, your opponents and teammates at all times, win or lose.",
  },
  {
    id: "m3",
    title: "Support",
    image:
      "https://cdn-media.theathletic.com/RuptQbC5tByR_RuptQbC5tByR_6DhSZKnR81ey_original_1440x960.jpg",
    description:
      "Support. Anticipate your teammates’ needs and always support your teammate with the ball. Supporting your teammate means being in a position where they can pass the ball to you. Stay far enough away so the pass effectively neutralizes the defender. Stay close enough that they can make a good pass. If you are too far to make a good pass to your teammate, then you are too far for your teammate to make a good pass to you, and you are not supporting.",
  },
  {
    id: "m3",
    title: "Use your Brain",
    image:
      "https://danabrahams.com/wp-content/uploads/2015/07/b140208-be-a-quicker-thinker-stage-one.jpg",
    description:
      "Learn to kick around your target. Don’t shoot towards your defender. Passing or dribbling the ball laterally or even backward can be a better choice if it maintains possession of the ball. Possession of the ball is key to controlling the pace and direction of the game. Also,Passing is important, so is to know when to take your shot. Don’t hesitate to fire a shot at goal if you feel an opportunity. Take your best shot and shoot in the back of the net. ",
  },
];

export default function ExpertTips() {
 
  return (
    <>
    <Sidebar/>
      <Layout>
        <h1 className="cut-text">Expert Tips</h1>
        <ExpertTipsList meetups={DUMMY_DATA} />
      </Layout>
    </>
  );
}
