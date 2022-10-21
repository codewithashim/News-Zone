import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAltSquare, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, image_url, _id, details, rating, total_view } =
    news;

  return (
    <>
      <section>
        <Card className="w-full m-3">
          <Card.Header className="d-flex justify-content-between align-items-center">
            <div className="userInfo d-flex align-items-center justify-content-center gap-2">
              <Image
                src={author.img}
                style={{ width: "60px" }}
                roundedCircle
              ></Image>
              <div>
                <h6>{author.name}</h6>
                <p>{author.published_date}</p>
              </div>
            </div>
            <div>
              <Link className="mr-4">
                <FaBookmark></FaBookmark>
              </Link>
              <Link>
                <FaShareAltSquare></FaShareAltSquare>
              </Link>
            </div>
          </Card.Header>
          <Card.Body>
            <Card.Img
              variant="top"
              src={image_url}
            />
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div>
                {details.length > 200 ? (
                  <p>
                    {details.slice(0, 250) + "...."}{" "}
                    <Link to={`/news/${_id}`}>Read More</Link>
                  </p>
                ) : (
                  <p>{details}</p>
                )}
              </div>
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center ">
              <FaStar className="text-warning"></FaStar>
              <FaStar className="text-warning"></FaStar>
              <FaStar className="text-warning"></FaStar>
              <FaStar className="text-warning"></FaStar>
              <FaStar className="text-warning"></FaStar>
              <span className="text-warning">{rating.number}</span>
            </div>
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <FaEye></FaEye>
              <span>{total_view}</span>
            </div>
          </Card.Footer>
        </Card>
      </section>
    </>
  );
};

export default NewsCard;
