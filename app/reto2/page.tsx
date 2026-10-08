"use client"; //pa poder usar el useState

import { useState } from 'react';

export default function Reto2Page() {

    //creo un estado para almacenar el numero que va a actualizar la barra dinamica
    const [numeroBarra, setNumeroBarra] = useState(0);

    //creo un estado para lo que el usuario escribe en la cajita
    const [numeroInput, setNumeroInput] = useState("0");

    //Creo un estado para ponerle un error por si acaso el usuario no pone un numero entre 0% y 100%
    const [error, setError] = useState(false);

    //Creo una funcion pa validar el numero que el usuario ingresa
    function validarNumero(valor: number) {
        if (valor < 0 || valor > 100) {
            setError(true);
        }
        else {
            //si todo bien, error false o sea no lo muestro
            setError(false);
        }
    }

    return (
        <div className="flex flex-col items-center mt-12">

            <h1 className="text-3xl font-bold mb-6">
                Progress bar
            </h1>

            {/*pongo la barra de progreso y se actualiza cuando el usuario ingresa un numero en la cajita*/}
            <div className="w-75 h-7 bg-gray-300 rounded-full overflow-hidden">

               {/*Esta parte es la que se va llenando dependiendo del porcentaje familia*/}
                <div
                    className="h-full bg-rose-400 rounded-full flex items-center justify-center text-white"
                    style={{ width: `${numeroBarra}%` }}
                >
                    {/*esto hace que el porcentaje solo se muestre si es mayor a 0, sino no se ve nada*/}
                    {numeroBarra > 0 && `${numeroBarra}%`}
                </div>

            </div>

            {/*Ahora la cajita para meter el numero*/}
            <div className="flex items-center gap-3 mt-5">

                <label>Input Percentage:</label>

                <input
                    type="text"
                    value={numeroInput} //para que sea 1 formulario controlado, el valor de la cajita es el estado numeroInput
                    className="w-20 h-9 border-2 border-gray-500 rounded-full text-center"

                    //Que siempre que cambie el valor de la cajita valide
                    onChange={(valorEntrada) => {

                        const texto = valorEntrada.target.value;
                        setNumeroInput(texto); //actualizo el estado numeroInput con lo que el usuario escribe

                        //Si deja la cajita vacia, no muestro error
                        if (texto === "") {
                            setError(false);
                            setNumeroBarra(0);
                            return;
                        }

                        const valor = Number(texto); //lo casteo pa valdidar

                        validarNumero(valor);

                        //tambien si todo bien, actualizo
                        if (valor >= 0 && valor <= 100) {
                            setNumeroBarra(valor);
                        }
                    }}
                />

            </div>

            {/*Muestro el error solo si hay un numero invalido o sea negativo o mayor a 100*/}
            {error && (
                <p className="text-red-500 mt-3">
                    Ingresa un número entre 0 y 100
                </p>
            )}

        </div>
    );
}