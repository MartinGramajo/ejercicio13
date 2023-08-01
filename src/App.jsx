import "./App.css";
import CardClima from "./components/CardClima";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="bg-app d-flex flex-column min-vh-100">
      <Formulario />
      <CardClima />
    </div>
  );
}

export default App;
