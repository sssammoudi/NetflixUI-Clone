import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
//import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      {/*<Nav />*/}
      <Banner />
      <Row title="Netflix Originals" fetchURL={requests.fetchNetflix} />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchRated} />
      <Row title="Action movies" fetchURL={requests.fetchAction} />
      <Row title="Romance movies" fetchURL={requests.fetchRomance} />
      <Row title="Comedie movies" fetchURL={requests.fetchComedie} />
      <Row title="Horror movies" fetchURL={requests.fetchHorror} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
