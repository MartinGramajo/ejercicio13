import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Formulario = ({ register, handleSubmit, onSubmit, errors }) => {
  return (
    <div className="d-flex justify-content-center py-5">
      <Form
        onSubmit={handleSubmit(onSubmit)}
        className="p-4 form-box"
        style={{ borderRadius: "10px" }}
      >
        <Row className="mb-3 ">
          <Form.Group className="user-box" controlId="validationCustom01">
            <Form.Control
              className="ps-2"
              {...register("city", { required: true })}
              type="text"
            />
            <Form.Label className="ms-3 h6">Nombre de la Ciudad</Form.Label>
            {errors.city?.type === "required" && (
              <p className="text-danger peso-bold">
                Por favor ingresa un nombre de ciudad valida.
              </p>
            )}
          </Form.Group>

          <Form.Group className="my-2 user-box" controlId="validationCustom02">
            <Form.Control
              type="text"
              {...register("country", { required: true })}
            />
            <Form.Label className=" ms-3  h6">Nombre del país</Form.Label>
            {errors.country?.type === "required" && (
              <p className="text-danger peso-bold">
                Por favor ingresa un nombre de País valido.
              </p>
            )}
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
