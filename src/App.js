import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
