import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link, useNavigate } from 'react-router-dom';

const Fish = ({ meal }) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
    const navigate = useNavigate()

    const handlerDetails = () => {
      navigate(`/fish/${idMeal}`);
    }

  return (
    <CardGroup>
    <Card className='col'>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text>
          {strInstructions.slice(0, 120)}<span className='text-primary'>...See More</span>
        </Card.Text>
      </Card.Body>
      {/* <Link to={`/fish/${idMeal}`}>
        <Button  className='w-100 btn-info fw-semibold'>Details</Button>
      </Link> */}
      <Button onClick={handlerDetails} className='w-100 btn-info fw-semibold'>Details</Button>
    </Card>
  </CardGroup>
  );
};

export default Fish;
