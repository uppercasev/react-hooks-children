import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Oprah Giveaway!" direction="vertical">
        <div>You get a car!</div>
        <div>And You get a car!</div>
        <div>And You get a car!</div>
        <div>EVERYONE GETS A CAR!!</div>
      </Container>
      <Container header="I like turtles!" textPosition="right" direction="vertical" contentPosition="left">
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
      </Container>
    </div>
  );
}

export default App;
