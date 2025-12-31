import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  nom,
  equipe,
  nationalite,
  numero,
  age,
  image
}) => {

  const cardStyle = {
    width: "15rem",
    margin: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
  };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={image} height="200" />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {equipe}<br />
          <strong>Nationalité :</strong> {nationalite}<br />
          <strong>Numéro :</strong> {numero}<br />
          <strong>Âge :</strong> {age} ans
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  nom: "Nom inconnu",
  equipe: "Équipe inconnue",
  nationalite: "Non définie",
  numero: 0,
  age: 0,
  image: "https://via.placeholder.com/250"
};

export default Player;
