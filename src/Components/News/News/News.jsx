import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const News = () => {
  const news = useLoaderData(); // this is the data from the loader

  const { title, details, image_url, category_id } = news;

  return (
    <div className="py-5">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="primary">
            <Link to={`/cetagory/${category_id}`} className="text-white">
              Back To Main News
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
