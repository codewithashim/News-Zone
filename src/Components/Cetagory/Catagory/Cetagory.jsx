import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../../Hokes/UseTitle";
import NewsCard from "../../Sheard/NewsCard/NewsCard";

const Cetagory = () => {
  useTitle("Cetagory");
  const cetagoryNews = useLoaderData(); // this is the data from the loader
  return (
    <div>
      <h5>
        Total News Found:{" "}
        <span className="text-warning">{cetagoryNews.length}</span>
      </h5>
      <div>
        {cetagoryNews.map((news) => {
          return <NewsCard key={news._id} news={news}></NewsCard>;
        })}
      </div>
    </div>
  );
};

export default Cetagory;
