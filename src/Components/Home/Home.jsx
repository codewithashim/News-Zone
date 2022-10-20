import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Sheard/NewsCard/NewsCard";

const Home = () => {
  const news = useLoaderData(); // this is the data from the loader

  return (
    <>
      <section>
        <div>
          {news.map((news) => {
            return <NewsCard key={news._id} news={news}></NewsCard>;
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
