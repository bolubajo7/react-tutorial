import React from "react";
import * as styles from "./Home.module.scss";
import MyPic from "../../assets/bolu.jpg";

const Home = () => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <section>
          <h1>Bolu Olubajo</h1>
          <h2>Associate AND Multifaceted</h2>
          <span>Product developer | Musician | Sports watcher</span>
          <br />
        </section>
        <img src={MyPic} alt="Me" />
      </div>
    </React.Fragment>
  );
};

export default Home;
