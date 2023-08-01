import { useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Formulario = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="d-flex justify-content-center py-5">
      <Form
        onSubmit={handleSubmit}
        className="p-4 form-box"
        noValidate
        validated={validated}
        style={{ borderRadius: "10px" }}
      >
        <Row className="mb-3 ">
          <Form.Group className="user-box" controlId="validationCustom01">
            <Form.Control className="ps-2" name="city" required type="text" />
            <Form.Label className="ms-3 h6">Nombre de la Ciudad</Form.Label>
            <Form.Control.Feedback className="mb-2" type="invalid">
              Por favor ingresar una ciudad.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="my-2 user-box" controlId="validationCustom02">
            <Form.Control name="country" required type="text" />
            <Form.Label className=" ms-3  h6">Nombre del país</Form.Label>
            <Form.Control.Feedback type="invalid">
              Por favor ingresa un país
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center">
          <Button type="submit">Enviar formulario</Button>
        </div>
      </Form>
    </div>
  );
};

export default Formulario;
