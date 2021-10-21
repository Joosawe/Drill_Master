import "./Homepage.css";
import { useHistory } from 'react-router-dom';
function HomePage() {
  let history = useHistory();
  return (
    <>
    <body className = 'slider'>
      <h1>
        {" "}
        Drill Master <br />
        Take your game to the Next level{" "}
      </h1>
      <p className="p">
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
      </body>
    </>
  );
}
export default HomePage;
