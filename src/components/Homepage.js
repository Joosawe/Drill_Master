import "./Homepage.css";
import { useHistory } from 'react-router-dom';
function HomePage() {
  let history = useHistory();
  return (
    <>
    <div className = 'slider'>
      <div className= "container">
      <div className="header">
      <h1>
        Drill Master <br />
        Take your game to the Next level{" "}
      </h1>
      </div>
      <div>
      <p className="subHeader">
        The training app that presents everything you need to know about the
        game
        <br /> with expert training advice for you to get the edge over the
        competition.
        <br /> <br />
        <button className="btn" onClick ={() => history.push("/signup")} >Join For Free Now</button>
        <br />
        <br />
        Join now and start Reaching your goals.
      </p>
      </div>
      </div>
      </div>
    </>
  );
}
export default HomePage;
