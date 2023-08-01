import { useEffect, useState } from "react";
import "./App.css";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

function App() {
  const [dataClima, setDataClima] = useState({});
  const [dataForm, setDataForm] = useState({});
  console.log("file: App.jsx:11 ~ App ~ dataForm:", dataForm);

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
  // usamos el hook useForm de la librería. El cual devuelve un objeto.
  // register: function que permite registrar los distintos campos del form.
  // handleSubmit: para gestionar la acción del submit del formulario.
  // usamos el handleSubmit a la cual le pasamos la función onSubmit
  // usamos el register en los form.control o input, para cargar los input al objeto del form
  // en register podemos agregar un segundo parametro {}, para hacerlo requerido al input o agregarle la longitud max.
  // con la propiedad {errors} la podemos utilizar para mostrar un msj de error al usuario, para sacar esta propiedad utilizamos formState

  // useEffect(() => {
  //   consultarApi();
  // }, []);

  // const consultarApi = async () => {
  //   try {
  //     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=tucuman,ar&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
  //     const respuesta = await fetch(API_URL);

  //     const dato = await respuesta.json();
  //     setDataClima(dato);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
