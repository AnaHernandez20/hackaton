"use client"; //pa poder usar los estados y el useEffect

import { useState, useEffect } from "react";

export default function Reto4Page() {

    //Creo un estado para guardar los segundos que lleva el cronometro y poder mostrarlos en la pantalla 
    //ese estado se va a actualizar cada segundoo
    const [segundos, setSegundos] = useState(0);

    //Creo un estado para saber si el cronometro esta contanndo o sea si ya inició o si no
    const [contando, setContando] = useState(false);

    //useEffect hace que podamos renderizar cada vez que el estado contando cambia y sin eso no sirve pa nada el cronometro, porque no se actualiza cada segundo
    //cuando contando cambia, se ejecuta el useEffect para renderizar
    useEffect(() => {

        //Si no esta contando, no hago nada y me salgo del useEffect y fin de avanzar 
        if (!contando) {
            return;
        }

        //al buscar en gugul:
        //setInterval es un metodo de js que hace que se ejecute una funcion cada cierto tiempo,
        //en este caso pues es cada segundo o cada 1000 ms xd 

        //Creo un intervalo que aumenta los segundos cada 1000 milisegundos
        const intervalo = setInterval(() => {
            //cada segundo hay que sumarle 1 a los segundos que lleva el cronometro anteriores
            setSegundos((anterior) => anterior + 1);
        }, 1000); //cada 1000 milisegundos o sea cada segundo tiene que aumentar el estado segundos xd

        //tiene que retornar esto porque por eso estaba todo loco
        //esta funcion lo que hace es que cuando le doy que pare el cronometro se quede quieto
        //por lo que busqué si uno pone esto ya no se enloquece jsdaj
        return () => clearInterval(intervalo);

    }, [contando]); //esta parte es re importante porque es la que hace que
    //el useEffect se ejecute cada vez que el estado contando cambia, si no lo pongo, el cronometro no funciona como me pasó antes 
    //aqui le digo a mi bro useEffect vuelve a ejecutar esta lógica cuando cambie contando

    //Creo una funcion para iniciar el cronometro y ahi cambia el estado contando a true
    function iniciar() {
        setContando(true);
    }

    //Creo una funcion para detener el cronometro o sea cambia contando a false y ahi se sale del useEffect pa que no se actualice mas los segundos
    function detener() {
        setContando(false);
    }

    //Creo una funcion para reiniciar el cronometro
    function reiniciar() {
        //o sea ya deja de contar y vuelvo a 0 segundos mi gente
        setContando(false);
        setSegundos(0);
    }

    //Convierto los segundos en minutos y segundos
    const minutos = Math.floor(segundos / 60); //1 minuto 60 segundos, mis segundos cuantos min: (mis segundos*1)/60
    const segundosRestantes = segundos % 60; //el resto de la division de mis segundos entre 60 son los segundos q sobraron y toca mostrarlos

    return (
        <div className="flex flex-col items-center mt-12">

            <h1 className="text-5xl font-bold mb-10">
                Timer
            </h1>

            {/*Muestro los minutos y segundos que lleva el cronometro*/}
            <p className="text-3xl mb-6">
                {minutos} mins {segundosRestantes} secs
            </p>

            {/*Creo los botones para controlar el cronometro*/}
            <div className="flex gap-3">

                {/*que al dar click inicie, pare o reinicie*/}
                <button
                    onClick={iniciar} 
                    className="bg-green-400 text-black px-6 py-4 text-xl">
                    Start
                </button>

                <button
                    onClick={detener}
                    className="bg-red-400 text-black px-6 py-4 text-xl">
                    Stop
                </button>

                <button
                    onClick={reiniciar}
                    className="bg-yellow-400 text-black px-6 py-4 text-xl">
                    Reset
                </button>

            </div>

        </div>
    );
}