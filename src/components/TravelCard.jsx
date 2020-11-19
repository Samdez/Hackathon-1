import React, { useContext } from "react";
import {
  CardText,
  CardBody,
  CardTitle,
  Col,
  Button,
  CardImg,
} from "reactstrap";
import { useState } from "react";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import "./TravelCard.css";
import tripContext from "../contexts/tripContext";

function TravelCard({ arrival, departure, duration, price}) {
  const [isFavorite, setIsFavorite] = useState(false);
  const {
    departureCity,
    arrivalCity,
    selectedDate,
  } = useContext(tripContext);

  return (
    <>
      <Col style={{ display: "flex", justifyContent: "center" }}>
        <CardBody className="card-body">
          <CardTitle tag="h2" style={{ textAlign: "center" }}>
            {departureCity} / {arrivalCity}
          </CardTitle>

          <div className="bloc-card">
            <div className="ville-depart">
              <CardText style={{ fontWeight: "bold" }}>{departure}</CardText>
            </div>
            <CardText>Durée : {duration}h</CardText>
            <div className="ville-arrivee">
              <CardText style={{ fontWeight: "bold" }}>{arrival}</CardText>
            </div>
          </div>

          <CardText style={{ fontWeight: "bold", textAlign: "center" }}>
            {price}€
          </CardText>

          <CardText style={{ textAlign: "center" }}>
            Have a god trip with BlaBlaCalèche
          </CardText>
          <div
            className="favoris"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <CardImg src="" alt="Card image cap" />

            <Button
              style={{
                backgroundColor: " rgb(247, 244, 244)",
                border: "none",
                outline: "none",
              }}
              onClick={() => {
                setIsFavorite(!isFavorite);
              }}
            >
              {isFavorite ? (
                <AiTwotoneStar size="1.5rem" color="#F0C300" />
              ) : (
                <AiOutlineStar
                  size="1.5rem"
                  backGroundColor="red"
                  color="#585E68"
                />
              )}
            </Button>
          </div>
        </CardBody>
      </Col>
      <div
        style={{
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        <Button
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            height: "30px",
            width: "150px",
            outline: "none",
          }}
        >
          Choisir ce Trajet
        </Button>
      </div>
    </>
  );
}

export default TravelCard;
