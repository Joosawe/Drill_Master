import './Homepage.css';
function HomePage(props) {
    return (
      <section>
        <header className='header'>
          <div className='div'>DrillMaster</div>
          <nav className='nav'>
            <ul className='navbar'>{props.children}</ul>
          </nav>
        </header>
        <h1>
          {" "}
          Drill Master <br />
          Take your game to the Next level{" "}
        </h1>
        <p className='p'>
          The training app that presents everything you need to know about the
          game
          <br /> with expert training advice for you to get the edge over the
          competition.
          <br /> <br />
          <button className='btn'>Join For Free Now</button>
          <br />
          <br />
          Join now and start Reaching your goals.
        </p>
      </section>
    );
  }
  export default HomePage;
  