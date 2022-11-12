import React, { Component } from "react";
import { FormCheck } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const MenuItem = ({ platos }) => {
  return platos.map((plato) => (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={plato.imageItem} />
      <Card.Body>
        <Card.Title>{plato.name}</Card.Title>
        <Card.Text>
          {plato.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{plato.ingredients}</ListGroup.Item>
        
      </ListGroup>
    
    </Card>
  ));
};

export default MenuItem;
