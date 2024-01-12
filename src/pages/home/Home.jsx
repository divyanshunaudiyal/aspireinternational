import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home">
      <div className="home-container">
        <div className="text">
          <h1>We are bringing overseas education within everyone’s reach</h1>
          <p>
            Our Tech-enabled solutions help international students and
            recruitment partners choose the best global universities
          </p>
          <button>
            <Link to="/contact">Enquire Now</Link>
          </button>
        </div>
        <div className="image">
          <img src="../../home.png" alt="image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
