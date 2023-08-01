import { useEffect, useState } from "react";
import "./App.css";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Spinner } from "react-bootstrap";
import cartel from "../src/assets/cartel.png";

function App() {
  const [dataClima, setDataClima] = useState({
    name: "",
    main: {
      feels_like: "",
      humidity: "",
      temp: "",
      temp_max: "",
      temp_min: "",
    },
    sys: {
      country: "",
    },
    weather: [
      {
        description: "",
        icon: "",
      },
    ],
    wind: {
      speed: "",
    },
  });
  const [dataForm, setDataForm] = useState({
    city: "tucuman",
    country: "arg",
  });
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    consultarApi();
  }, [dataForm]);

  const consultarApi = async () => {
    try {
      setMostrarSpinner(true);
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${dataForm.city},${dataForm.country}&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
      const respuesta = await fetch(API_URL);

      const dato = await respuesta.json();
      setDataClima(dato);
      setMostrarSpinner(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (data) => {
    if (
      errors.city?.type !== "required" &&
      errors.country?.type !== "required"
    ) {
      setDataForm(data);
      Swal.fire({
        icon: "success",
        title: "Datos Enviado. Espere su consulta por favor.",
        showConfirmButton: false,
        timer: 2000,
      });

      reset();
    } else {
      Swal.fire({
        icon: "error",
        title: "No se pudo enviar los datos.",
      });
    }
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Formulario
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
      {dataClima.cod === "404" ? (
        <img className="cartel" src={cartel} alt="" />
      ) : dataClima.length === 0 ? (
        ""
      ) : mostrarSpinner ? (
        <div className="my-5 text-center">
          <Spinner className="fs-1" animation="border" variant="light" />
        </div>
      ) : (
        <CardClima datos={dataClima} />
      )}
    </div>
  );
}

export default App;
