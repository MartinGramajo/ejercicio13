import { useEffect, useState } from "react";
import "./App.css";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function App() {
  const [dataClima, setDataClima] = useState({});
  console.log("file: App.jsx:10 ~ App ~ dataClima:", dataClima);
  const [dataForm, setDataForm] = useState({});
  console.log("file: App.jsx:12 ~ App ~ dataForm:", dataForm);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

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

  useEffect(() => {
    consultarApi();
  }, [dataForm]);

  const consultarApi = async () => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${dataForm.city},${dataForm.country}&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
      const respuesta = await fetch(API_URL);

      const dato = await respuesta.json();
      setDataClima(dato);
    } catch (error) {
      console.log(error);
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
      <CardClima />
    </div>
  );
}

export default App;
