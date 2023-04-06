import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Details = () => {
  const foodDetails = useLoaderData([]);
  const { strMeal, strCategory, strMealThumb, strInstructions } = foodDetails.meals[0];
  const navigate = useNavigate();

  const handlerBack = () => {
    navigate(-1);
  }

  return (
    <Card className=" container text-center">
      <Card.Header>{strCategory}</Card.Header>
      <Card.Body>
      <Card.Img variant="top" className="w-50 rounded-2" style={{height: '300px'}} src={strMealThumb} />
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          {strInstructions}
        </Card.Text>
        <Button onClick={handlerBack} variant="info">Go Back</Button>
      </Card.Body>
    </Card>
  );
};

export default Details;
