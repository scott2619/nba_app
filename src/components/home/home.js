import React from "react";
import NewsSlider from "../widgets/newsSlider/slider";
import NewsList from "../widgets/newsList/newsList";
import VideoList from "../widgets/videoList/videoList";

const Home = () => {
  return (
    <div>
      <NewsSlider
        type="featured"
        start={0}
        amount={3}
        settings={{ dots: false }}
      />

      <NewsList type="card" loadmore={true} start={3} amount={3} />
      <VideoList
        type="card"
        title={true}
        loadmore={false}
        start={0}
        amount={3}
      />
    </div>
  );
};

export default Home;
