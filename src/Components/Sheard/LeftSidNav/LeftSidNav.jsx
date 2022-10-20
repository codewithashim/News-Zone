import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const LeftSidNav = () => {
  const [cetagories, setCetagories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/news-cetagories")
      .then((res) => res.json())
      .then((data) => setCetagories(data));
  }, []);

  return (
    <>
      <main>
        <h5>All Cetagories {cetagories.length}</h5>

        <div>
          {cetagories.map((cetagory) => {
            return (
              <p key={cetagory.id}>
                <Link to={`/cetagory/${cetagory.id}`}>
                  {cetagory.name}
                </Link>
              </p>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default LeftSidNav;
