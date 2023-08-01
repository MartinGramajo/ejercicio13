import { useEffect, useState } from "react";
import "./App.css";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";

function App() {
  const [dataClima, setDataClima] = useState({});
  console.log("file: App.jsx:8 ~ App ~ dataClima:", dataClima);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=tucuman,ar&appid=ce25853294f1642f1da64c29b939a302&units=metric&lang=es`;
      const respuesta = await fetch(API_URL);

      const dato = await respuesta.json();
      setDataClima(dato);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Formulario />
      <CardClima />
    </div>
  );
}

export default App;
