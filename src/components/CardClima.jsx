import { Card } from "react-bootstrap";

const CardClima = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Header>Nombre de la ciudad</Card.Header>
        <Card.Body>
          <Card.Title>temperatura: </Card.Title>
          <Card.Text>temperatura:</Card.Text>
          <Card.Text>humedad:</Card.Text>
          <Card.Text>viento:</Card.Text>
          <Card.Text>sensación térmica:</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardClima;
