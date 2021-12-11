import "./Styles//Homepage.css";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";

function HomePage() {
  let history = useHistory();
  return (
    <>
      <div className="container">
        <h1 className="neon">
          Drill Master <br />
          Take your game to the Next level{" "}
        </h1>

        <div className="show-inline-block">
          <br /> <br />
          <button className="btn" onClick={() => history.push("/signup")}>
            Join For Free Now
          </button>
          <Button variant="outline-info" href="/about-us">
            Learn About Us
          </Button>
        </div>
      </div>
    </>
  );
}
export default HomePage;
