# Proyecto en React - Consumiendo API

En este proyecto lo que hicimos fue crear una app que muestra por pantalla un Formulario, que solicita dos datos al usuario, Ciudad y Pais.

Y consumiendo la API **https://openweathermap.org/**, al ser ingresado estos datos y enviados, muestra por pantalla una card con los datos de la temperatura, humedad, viento, sensación térmica de la ciudad y el país ingresado.

Ademas en caso de no existir ningún o de haber puesto mal la ciudad o el país por el usuario
se muestra una imagen not found por pantalla con el mensaje:

![Estructura](https://res.cloudinary.com/dtbfspso5/image/upload/v1690933218/Captura_de_pantalla_2023-08-01_204007_stedg0.png)

## Tecnologias / Herramientas ⚙

- React
- React-Bootstrap
- React-Hook-Form
- sweetalert2
- material/ui

## Usando React-hook-form 🤖

Estos Pasos lo dejo a modo de memo para utilizarlo en futuros proyectos:

1. Primero debemos instalarla y usando el hook useForm nos retorno un objeto.
2. De ese Hook podemos extraer:

- **register**: función que permite registrar los distintos campos del form, es para guardar los value de los input. Nota: el register lo debemos implementar en los form.control o input, para cargar la data al objeto del form que nos retorna el hook. En register podemos agregar un segundo parámetro {}, para hacerlo **required** al input o agregarle la longitud max.

- **handleSubmit**: función para gestionar la acción del submit del formulario. Al la cual le pasaremos una segunda función por parámetro la onSubmit()

- **reset**: función que me permite borrar los value de los input una vez enviado los datos.

- **errors** la podemos utilizar para mostrar un msj de error al usuario, para sacar esta propiedad utilizamos **formState**

## Requisitos ✅

- Crea una aplicación web, que permita escribir una ubicación y un país, luego presione un botón consultar y muestre el clima del lugar ingresado, consultar el clima utilizando la API https://openweathermap.org/. Si la ubicación ingresada no existe, mostrar un cartel de error indicando que no se encontraron datos de la ciudad ingresada.

> **IMPORTANTE**: Para que funcione el proyecto en su Pc se debe hacer el npm i para poder traer los modules de bootstrap y todo lo necesario para poder darle el inicio al proyecto.

## Como Clonar el repositorio 💻

```bash
Agrego el link de mi repo [repositorio](https://github.com/MartinGramajo/ejercicio13.git)

git clone https://github.com/MartinGramajo/ejercicio13.git
```

## Como contribuir con el repositorio 🤝

Para contribuir en el proyecto debe ponerse en contacto al siguiente mail: **martingramajo08@gmail.com**

## Autores 🤺

1. Mago

## Licencia 📃

copyright (c) 2023
