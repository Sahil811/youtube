import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RecommendedVideos from "./components/RecommendedVideos";
import SearchPage from "./components/SearchPage";
import { useStateValue } from "./StateProvider";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("spoon s2000");
  const [{ videos }, dispatch] = useStateValue();

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=rating&q=s${search}&key=${process.env.REACT_APP_APIKEY}`;

    const getVideo = async () => {
      axios
        .get(url)
        .then((res) =>
          dispatch({
            type: "SET_VIDEOS",
            videos: res.data.items,
          })
        )
        .catch((err) => console.log(err));
    };

    getVideo();
  }, [search, dispatch]);

  console.log(videos);

  return (
    <div className="app">
      <BrowserRouter>
        <Header setSearch={setSearch} search={search} />
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar />
              <SearchPage videos={videos} />
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
