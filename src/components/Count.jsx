import React, { useState } from 'react'

const Count = () => {
/*     let numero = 0; */
    const [numero, setNumero] = useState(0);
    const arrayNombres = ["Guille", "Carlota", "Rodolgo", "Mondongo", "Ricardo", "Santi", "Mario", "Diego"];
    const [nombre, setNombre] = useState(arrayNombres[0]);

    const cambiarNombre = () => {
        const posicionRandom = Math.floor(Math.random() * arrayNombres.length);
        if (arrayNombres[posicionRandom] === nombre && posicionRandom !== 0) {
            setNombre(arrayNombres[posicionRandom - 1]);
        } else if (arrayNombres[posicionRandom] === nombre && posicionRandom === 0) {
            setNombre(arrayNombres[posicionRandom + 1]);
        } else {
            setNombre(arrayNombres[posicionRandom]);
        }
    }
    const sumar = () => {
        /* numero++; */
        setNumero(numero + 1);
        /* console.log(numero); */
    }
    const restar = () => {
        /* numero--; */
        setNumero(numero - 1);
        /* console.log(numero); */
    }
    console.log("HOLA ME RENDERIZO DESDE PRUEBA.JSX!");

  return (
    <div>
        <button onClick={sumar}>+</button>
        {numero}
        <button onClick={restar}>-</button>
        <button onClick={cambiarNombre}>CAMBIAR NOMBRE ALEATORIO</button>
        <h2>{nombre}</h2>
    </div>
  )
}

export default Count;