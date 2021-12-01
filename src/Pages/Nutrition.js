/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from "react";
import { Button, Tooltip } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import "./styles/drill.css";
import { bubble as Menu } from "react-burger-menu";
import { auth } from "../firebase";
import Layout from "../components/layouts/layout";
import NutritionList from "./StaticpageComponents/NutritionList";


const DUMMY_DATA = [
  {
    id: "m1",
    title: "Calorie Intake",
    image:
      "https://www.news-medical.net/image.axd?picture=2019%2F1%2FBy_photka.jpg",
    description:
     "To find out how much calories you should consume in a day, take your body weight in pounds and divide by 2.2, then multiply by 30 and 35. So, if an athlete weighs 165 lbs, divided by 2.2 is 75 times 30 = 2250 and then 75 times 35 = 2625. That athlete should consume around 2250-2625 calories in a day"
  },
  {
    id: "m2",
    title: "Hydration",
    image:
      "https://i.guim.co.uk/img/media/b6101094d58bfb59c47ff5c3212700713544b6f5/0_13_1875_1055/1875.jpg?width=1280&quality=85&auto=format&fit=max&s=c652e827ed9a066e5cb7593a3c1f5b48",

    description:
     "Water is the most hydrating and best option for most training sessions and sporting events.If your workouts are one hour or less, or longer but not very intense, just drink water. That’s the best option for fluid.You don’t need anything else- you’ll just be wasting money and probably drinking too much sugar and calories if you choose a sports drink or energy drink. Gatorade has a lot of sugar and you don’t need that unless you are burning lots of calories and sweating intensely."
  },
  {
    id: "m4",
    title: "General Diet Tip",
    image:
      "https://i1.wp.com/www.5-a-side.com/wp-content/uploads/2014/09/Food-Groups-Diet-protein-carbohydrate-vitamins-and-minerals.png",
    description:
        "A soccer player's diet should consist of about 60-65% carbohydrate, 20-25% fat and 10-15% protein. Carbohydrates should be predominantly in the form of fresh fruits and whole grains such as whole meal bread, pasta, potatoes and brown rice. Protein should come from lean meats, poultry, fish, pulses, beans and nuts."
  },
  {
    id: "m3",
    title: "1-2 hours before competition or a workout",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHJb8z2ToNLO82uiqEeSDiP2ZnEPRoyl9C3g&usqp=CAU",
    description:
      "As you get closer to game time, the amount of food that you eat should decrease, it's important to still nourish your body but make sure you eat foods that are easy to digest. Remember avoid fat and fiber before games, they slow down digestion and make it harder for the body to access carbohydrates which provide fuel for physical activity."
      
  },
  {
    id: "m5",
    title: "After a game or workout",
    image:
      "https://images.squarespace-cdn.com/content/v1/54e74179e4b05860a465011b/1461268805153-DUV8X7G08U6O9588E3YF/pre+%26+post+workout+snacks?format=1000w",
    description:
      "After your workout, your body tries to rebuild its glycogen stores as well as repair and regrow those muscle proteins. Eating the right nutrients soon after you exercise can help your body get this done faster. It’s especially important to eat carbs and protein after your workout."
  },
];

export default function Drills() {
  const [error, setError] = useState("");
  const { logout, uid } = useAuth();
  const history = useHistory();
  const db = firebase.database();
  const [currentUser] = useState(uid);
  const usersref = db.ref("user");
  var useruid = auth.currentUser.uid;

  usersref.on("value", gotData, errData);

  window.onload = function () {
    if (!window.location.hash) {
      window.location = window.location + "#Welcome";
      window.location.reload();
    }
  };

  function gotData(data) {
    var alluserspec = document.querySelectorAll(".alluserspec");
    for (var i = 0; i < alluserspec.length; i++) {
      alluserspec[i].remove();
    }

    // console.log(data.val());
    var userspec = data.val();
    var keys = Object.keys(userspec);

    for (var j = 0; j < keys.length; j++) {
      var k = keys[j];
      var firstname = userspec[k].firstname;
      var lastname = userspec[k].lastname;
      var position = userspec[k].position;
      var interest = userspec[k].interest;
      var motivation = userspec[k].motivation;
      var currentUserID = userspec[k].currentUserID;
      console.log("current user id", currentUserID);
      console.log("database current uid", useruid);
      if (currentUserID === useruid) {
        try {
          document.getElementById("firstname").innerHTML = firstname;
          document.getElementById("lastname").innerHTML = lastname;
          document.getElementById("position").innerHTML = position;
          document.getElementById("interest").innerHTML = interest;
          document.getElementById("motivation").innerHTML = motivation;
        } catch {
          console.log("cannot retrieve data");
        }
      }
    }
  }

  function errData(err) {
    console.log("Error");
    console.log(err);
  }

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Menu>
        <h4 className="text-center mb-4">Welcome</h4>
        <h2 className="text-center mb-4">
          <p className="Name">
            <h1 id="firstname"></h1>
            <h1 id="lastname"></h1>
          </p>
        </h2>
        <h6 className="reference">Your Position:</h6>
        <h5 id="position"></h5>
        <h6 className="reference">Focus Area of Improvement:</h6>
        <h5 id="interest"></h5>
        <h6 className="reference">Motivational Quote:</h6>
        <h5 id="motivation"></h5>

        <a className="menu-item" href="/expertTips">
          Expert Tips
        </a>

        <a className="menu-item" href="/Nutrition">
          Nutrition
        </a>

        <a className="menu-item" href="/Equipment">
          Equipment
        </a>
        <a className="menu-item" href="/contactus">
          Contact us
        </a>

        <div className="logout">
          <Button className="w-100" variant="danger" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Menu>
      <Layout>
        <h1 className="cut-text">Nutrition Tips </h1>
        <div className = "div1">
            Proper nutrition is essential for a  soccer athlete. You
            shouldn’t be fueling your workouts with packaged snacks and sugary
            foods An appropriate nutrition plan will provide the best fuel and
            nutrients to help your body train well, recover quickly, and perform
            at the top of your ability.
        </div>
        <NutritionList meetups={DUMMY_DATA} />
      </Layout>
    </>
  );
}
